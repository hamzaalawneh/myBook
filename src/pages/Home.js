import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import logo from '../components/images/bookChildren.png';
import PostBox from '../components/PostBox'
import CreatePostBox from '../components/CreatePostBox'
import FriendRequestBox from '../components/FriendRequestBox'
import SendFriendRequestBox from '../components/SendFriendRequestBox'
import firebase from '../Firebase'
import logoutImg from '../components/images/logout.png';
import ReactSearchBox from 'react-search-box'

export default function Home(props) {
  // Declare a new state variable, which we'll call "count"
  const [posts, setPosts] = useState([]);
  const [postsChanged, setPostState] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [recievedRequests, setRecievedRequests] = useState([]);
  const [searched, setSearchedUser] = useState();
  const [requests, updateTheRequests] = useState(true);
  const db = firebase.firestore();
  const history = useHistory();



  function logout() {
    localStorage.clear()
    history.push("/")

  }



  useEffect(() => {
    if (!userId) {
      history.push("/")
    }
  }, [userId]);

  useEffect(() => {
    //getting users except me ,to give them friend request,getting friends too
    var arrayOfUsers = []
    var arrayOfFriends = []
    var obj
    db.collection('users').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {

        if ((Object.keys(doc.data()).length !== 0) && (doc.data()['userId'] !== userId)) {
          obj = {}
          obj['key'] = doc.data()['userId']
          obj['value'] = doc.data()['userName']
          arrayOfUsers.push(obj)
        }
      })
      setUsers(arrayOfUsers)
    })
    db.collection('friends').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {

        if ((Object.keys(doc.data()).length !== 0) && (doc.data()['owner'] == userId)) {

          arrayOfFriends.push(doc.data())
        }
      })
      setFriends(arrayOfFriends)
    })


  }, []);

  useEffect(() => {
    /////////////////////////////////////////////requests I've sent 
    var arrayOfSentRequests = []
    var arrayOfRecievedRequests = []

    db.collection('friendRequests').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        if ((Object.keys(doc.data()).length !== 0) && (doc.data()['requestedUser'] == userId)) {

          arrayOfRecievedRequests.push(doc.data())
        }
      })
      setRecievedRequests(arrayOfRecievedRequests)
    })


    db.collection('friendRequests').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        if ((Object.keys(doc.data()).length !== 0) && (doc.data()['requestingUser'] == userId)) {

          arrayOfSentRequests.push(doc.data())
        }
      })
      setSentRequests(arrayOfSentRequests)
    })

  }, [requests]);



  useEffect(() => {
    //getting posts for me and my friends
    var arrayOfPosts = []
    db.collection('posts').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        
        if ((Object.keys(doc.data()).length !== 0) && ((friends.find(element => element.friend == doc.data()['userId'])) || (doc.data()['userId'] === userId))) {
          arrayOfPosts.push(doc.data())
        }
      })
     
      setPosts(arrayOfPosts)
    })

  }, [friends]);



  function sendFriendRequest(requestedUser) {
    firebase.firestore().collection('friendRequests').add({
      requestingUser: userId,
      requestingUserName: userName,
      requestedUser: requestedUser,
    })
    setSearchedUser('')
    updateTheRequests(!requests)

    alert('A request has been sent')
  }


  function addStatus(status) {
    //add a status
    firebase.firestore().collection('posts').add({
      userId: userId,
      postContent: status,
      userName: userName,
    })
    setPostState(!postsChanged)
   
  }

  function acceptOrReject(accepted, requestedUser, requestingUser) {
    var theQuery = db.collection('friendRequests').where('requestedUser', '==', requestedUser);
    theQuery.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
    });
    if (accepted) {

      firebase.firestore().collection('friends').add({
        owner: requestedUser,
        friend: requestingUser,
      })
      firebase.firestore().collection('friends').add({
        owner: requestingUser,
        friend: requestedUser,
      })
      alert('you are now friends')
    }
    updateTheRequests(!requests)
  }

  return (
    <div style={{ backgroundColor: ' white' }}>
      <img src={logoutImg} style={{ width: '50px', height: '50px', float: "right", marginRight: '15px', marginTop: '15px' }} onClick={() => logout()} alt="Logo" />
      {console.log('recievedRequests.......................')}
      {console.log(recievedRequests)}
      {userId ?
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <div style={{ flexDirection: 'row', display: 'flex', backgroundColor: '#fff0f5', width: '90%', height: '80%', boxShadow: '0px 6px 41px #9E9E9E', borderRadius: '10px' }}>
            <div style={{ flexDirection: "column", display: 'flex', backgroundColor: '#F8F8FF', overflowY: 'scroll', height: '100%', width: '25%', alignItems: 'center', borderRadius: '10px' }} >
              <p style={{ fontWeight: 'bold' }}>Status Bar</p>
              {posts.length > 0 && posts.map((data, index) => (
                < PostBox key={index} data={data} />
              ))}


            </div>
            <div style={{ flexDirection: "column", display: 'flex', backgroundColor: '#F8F8FF', overflowY: 'scroll', height: '100%', width: '25%', alignItems: 'center', borderRadius: '10px' }} >
              <p style={{ fontWeight: 'bold' }}>My Status Bar</p>
              <CreatePostBox addStatus={(status) => addStatus(status)} />
            </div>
            <div style={{ flexDirection: "column", display: 'flex', backgroundColor: '#F8F8FF', overflowY: 'scroll', height: '100%', width: '25%', alignItems: 'center', borderRadius: '10px' }} >
              <p style={{ fontWeight: 'bold' }}>Friend Requests</p>
              {recievedRequests.length > 0 && recievedRequests.map((data, index) => (
                <FriendRequestBox acceptOrReject={(accepted) => acceptOrReject(accepted, data.requestedUser, data.requestingUser)} name={data.requestingUserName} />
              ))}


            </div>
            <div style={{ flexDirection: "column", display: 'flex', backgroundColor: '#F8F8FF', overflowY: 'scroll', height: '100%', width: '25%', alignItems: 'center', borderRadius: '10px' }} >
              <p style={{ fontWeight: 'bold' }}>Search for people to add</p>
              <ReactSearchBox
                placeholder="Insert the name"
                value=""
                data={users}
                onSelect={record => {
                  setSearchedUser('')
                  setSearchedUser(record)
                }}
              />
              {searched && <SendFriendRequestBox sentRequests={sentRequests.find(element => element.requestedUser == searched.key)} sendFriendRequest={() => sendFriendRequest(searched.key)} userId={searched.key} name={searched.value} />}
            </div>
          </div>
        </div>
        :
        null}
    </div >
  );
}