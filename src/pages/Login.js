import React, { useState } from 'react';

import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import logo from '../components/images/bookChildren.png';
export default function Login() {
    // Declare a new state variable, which we'll call "count"
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    function handleSubmit(event) {
        alert(email + ' ' + password);
        event.preventDefault();
    }
    return (

        <div style={{ backgroundColor: '#fff0f5' }}>
            <Container >

                <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
                    <div style={{ width: '100%', height: '50%', }}>
                    <img src={logo} style={{width:'200px',height:'200px'}} alt="Logo" />

                        <Form onSubmit={() => handleSubmit()}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{float:'left'}}>Email address</Form.Label>
                                <Form.Control value={email} type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label style={{float:'left'}}>Password</Form.Label>
                                <Form.Control value={password} type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                            </Form.Group>
                            <Button variant="primary" className={'mr-2'} type="submit">
                                Sign In
  </Button>
                            <Button style={{backgroundColor:'red',border:0}} variant="primary" onClick={()=>alert('ffff')} >
                                Register
  </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
}