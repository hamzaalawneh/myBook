import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import firebase from '../Firebase'

import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import logo from '../components/images/bookChildren.png';
export default function SignUp(props) {
    // Declare a new state variable, which we'll call "count"
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [login, setLogin] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState();
    const [userId, setUserId] = useState(localStorage.getItem('userId'));

    const history = useHistory();


    useEffect(() => {
        if (login) {
            history.push("Home")
        }
    }, [login]);

    useEffect(() => {
        if (userId) {
            history.push("Home")
        }
    }, []);
    function handleSubmit(event) {

        if (password == confirmPassword) {


            firebase.auth().createUserWithEmailAndPassword(email, password).then(function (data) {
                // [END createwithemail]
                // callSomeFunction(); Optional
                // var user = firebase.auth().currentUser;
                console.log(data)
                data.user.updateProfile({
                    displayName: name
                }).then(function () {
                    firebase.firestore().collection('users').add({
                        userId: data.user.uid,
                        userName: name,
                    })
                    localStorage.setItem('userId', data.user.uid)
                    localStorage.setItem('userName', name)
                }).then(function () {
                    setLogin(true)
                })
            }, function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    console.error(error);
                }

                // [END_EXCLUDE]
            });
        }
        else {
            alert('passwords does not match')
        }
        event.preventDefault();

    }
    return (
        // <li><Link to={'/'} className="nav-link"> Home </Link></li>
        // <li><Link to={'/Login'} className="nav-link">Login</Link></li>
        // <li><Link to={'/SignUp'} className="nav-link">SignUp</Link></li>
        <div style={{ backgroundColor: '#fff0f5' }}>
            <Container >
                {!userId ?
                    <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
                        <div style={{ width: '100%', height: '50%', }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <img src={logo} style={{ width: '200px', height: '200px' }} alt="Logo" />
                            </div>
                            <Form onSubmit={(event) => handleSubmit(event)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ float: 'left' }}>Email address</Form.Label>
                                    <Form.Control value={email} type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ float: 'left' }}>name</Form.Label>
                                    <Form.Control value={name} type="text" placeholder="Enter your name" onChange={(event) => setName(event.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label style={{ float: 'left' }}>Password</Form.Label>
                                    <Form.Control value={password} type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label style={{ float: 'left' }}>Confirm Password</Form.Label>
                                    <Form.Control value={confirmPassword} type="password" placeholder="Confirm Password" onChange={(event) => setConfirmPassword(event.target.value)} />
                                </Form.Group>
                                <Button variant="primary" className={'mr-2'} type="submit">Register</Button>


                            </Form>
                        </div>

                    </div>
                    :
                    null}
            </Container>
        </div>
    );
}