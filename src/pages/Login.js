import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import firebase from '../Firebase'

import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import logo from '../components/images/bookChildren.png';
export default function Login() {
    // Declare a new state variable, which we'll call "count"
    const [email, setEmail] = useState();
    const [userId, setUserId] = useState(localStorage.getItem('userId'));
    const [password, setPassword] = useState();
    const history = useHistory();


    useEffect(() => {
        if (userId) {
          history.push("Home")
        }
      }, []);

    function handleSubmit(event) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((data) => {
             
                if (data.user) {
                    localStorage.setItem('userId', data.user.uid)
                    localStorage.setItem('userName', data.user.displayName)
                    history.push("Home")

                }
            }).catch(function (error) {
                alert(error.message);
            });

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

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label style={{ float: 'left' }}>Password</Form.Label>
                                    <Form.Control value={password} type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                                </Form.Group>
                                <Button variant="primary" className={'mr-2'} type="submit">Sign In</Button>


                                <Link to={'/SignUp'}>
                                    <Button style={{ backgroundColor: 'red', border: 0 }} variant="primary"> Register</Button>
                                </Link>

                            </Form>
                        </div>
                    </div>
                    :
                    null}
            </Container>
        </div>
    );
}