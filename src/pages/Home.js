import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import logo from '../components/images/bookChildren.png';
import PostBox from '../components/PostBox'
import CreatePostBox from '../components/CreatePostBox'
import FriendRequestBox from '../components/FriendRequestBox'
import firebase from '../Firebase'

export default function Home() {
  // Declare a new state variable, which we'll call "count"
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  function handleSubmit(event) {
    alert(email + ' ' + password);
    event.preventDefault();
  }
  return (
    <div style={{ backgroundColor: ' white' }}>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ flexDirection: 'row', display: 'flex', backgroundColor: '#fff0f5', width: '90%', height: '80%', boxShadow: '0px 6px 41px #9E9E9E', borderRadius: '10px' }}>
          <div style={{ flexDirection: "column", display: 'flex', backgroundColor: '#F8F8FF', overflowY: 'scroll', height: '100%', width: '25%', alignItems: 'center', borderRadius: '10px' }} >
            <PostBox />
          </div>
          <div style={{ flexDirection: "column", display: 'flex', backgroundColor: '#F8F8FF', overflowY: 'scroll', height: '100%', width: '25%', alignItems: 'center', borderRadius: '10px' }} >
            <CreatePostBox />
          </div>
          <div style={{ flexDirection: "column", display: 'flex', backgroundColor: '#F8F8FF', overflowY: 'scroll', height: '100%', width: '25%', alignItems: 'center', borderRadius: '10px' }} >
            <FriendRequestBox />
          </div>
        </div>
      </div>
    </div >
  );
}