import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import logo from '../components/images/bookChildren.png';
import PostBox from '../components/PostBox'
import CreatePostBox from '../components/CreatePostBox'
import FriendRequestBox from '../components/FriendRequestBox'
import firebase from '../Firebase'
import logoutImg from '../components/images/logout.png';
import ReactSearchBox from 'react-search-box'

export default function Home(props) {
  // Declare a new state variable, which we'll call "count"
  const [posts, setPosts] = useState([]);
  const [postsChanged, setPostState] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const db = firebase.firestore();
  const history = useHistory();
  var data = [
    {
      key: 'john',
      value: 'John Doe',
    },
    {
      key: 'jane',
      value: 'Jane Doe',
    },
    {
      key: 'mary',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
  ]


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
    var arrayOfPosts = []
    db.collection('posts').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log('snapshot.docs')
        console.log(doc.data())
        if (Object.keys(doc.data()).length !== 0) {
          arrayOfPosts.push(doc.data())
        }
      })
      console.log('snapshot.docs')
      console.log(arrayOfPosts)
      setPosts(arrayOfPosts)
    })

  }, [postsChanged]);

  function addStatus(status) {
    firebase.firestore().collection('posts').add({
      userId: userId,
      postContent: status,
      userName: userName,
    })
    setPostState(!postsChanged)
    console.log(status)
  }
  return (
    <div style={{ backgroundColor: ' white' }}>
      <img src={logoutImg} style={{ width: '50px', height: '50px', float: "right", marginRight: '15px', marginTop: '15px' }} onClick={() => logout()} alt="Logo" />

      {userId ?
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <div style={{ flexDirection: 'row', display: 'flex', backgroundColor: '#fff0f5', width: '90%', height: '80%', boxShadow: '0px 6px 41px #9E9E9E', borderRadius: '10px' }}>
            <div style={{ flexDirection: "column", display: 'flex', backgroundColor: '#F8F8FF', overflowY: 'scroll', height: '100%', width: '25%', alignItems: 'center', borderRadius: '10px' }} >
              <p style={{ fontWeight: 'bold' }}>Status Bar</p>
              {posts.length > 0 && posts.map((data, index) => (
                < PostBox key={index} data={data} />
              ))
              }

            </div>
            <div style={{ flexDirection: "column", display: 'flex', backgroundColor: '#F8F8FF', overflowY: 'scroll', height: '100%', width: '25%', alignItems: 'center', borderRadius: '10px' }} >
              <p style={{ fontWeight: 'bold' }}>My Status Bar</p>
              <CreatePostBox addStatus={(status) => addStatus(status)} />
            </div>
            <div style={{ flexDirection: "column", display: 'flex', backgroundColor: '#F8F8FF', overflowY: 'scroll', height: '100%', width: '25%', alignItems: 'center', borderRadius: '10px' }} >
              <p style={{ fontWeight: 'bold' }}>Friend Requests</p>
              <FriendRequestBox />
            </div>
            <div style={{ flexDirection: "column", display: 'flex', backgroundColor: '#F8F8FF', overflowY: 'scroll', height: '100%', width: '25%', alignItems: 'center', borderRadius: '10px' }} >
              <p style={{ fontWeight: 'bold' }}>Search for people to add</p>
              <ReactSearchBox
                placeholder="Insert the name"
                value=""
                data={data}
                onSelect={record => console.log(record)}
              />
            </div>
          </div>
        </div>
        :
        null}
    </div >
  );
}