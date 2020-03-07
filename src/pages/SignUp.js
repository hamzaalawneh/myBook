import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import firebase from '../Firebase'

import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import logo from '../components/images/bookChildren.png';
export default function SignUp() {
    // Declare a new state variable, which we'll call "count"
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();


    function handleSubmit(event) {
        alert(email + ' ' + password);
        event.preventDefault();
    }
    return (
        // <li><Link to={'/'} className="nav-link"> Home </Link></li>
        // <li><Link to={'/Login'} className="nav-link">Login</Link></li>
        // <li><Link to={'/SignUp'} className="nav-link">SignUp</Link></li>
        <div style={{ backgroundColor: '#fff0f5' }}>
            <Container >

                <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
                    <div style={{ width: '100%', height: '50%', }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <img src={logo} style={{ width: '200px', height: '200px' }} alt="Logo" />
                        </div>
                        <Form onSubmit={() => handleSubmit()}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{ float: 'left' }}>Email address</Form.Label>
                                <Form.Control value={email} type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{ float: 'left' }}>Email address</Form.Label>
                                <Form.Control value={email} type="text" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label style={{ float: 'left' }}>Password</Form.Label>
                                <Form.Control value={password} type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label style={{ float: 'left' }}>Confirm Password</Form.Label>
                                <Form.Control value={confirmPassword} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className={'mr-2'} type="submit">Register</Button>
                      

                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
}