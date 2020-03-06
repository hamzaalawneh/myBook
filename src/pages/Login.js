import React, { useState } from 'react';

import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export default function Login() {
    // Declare a new state variable, which we'll call "count"
    const [name, setName] = useState();


    function handleSubmit(event) {

        event.preventDefault();
        alert(name);

    }
    return (

        // <Form>
        //     <Form.Group controlId="formBasicEmail">
        //         <Form.Label>Email address</Form.Label>
        //         <Form.Control type="email" placeholder="Enter email" />
        //         <Form.Text className="text-muted">
        //             We'll never share your email with anyone else.
        //   </Form.Text>
        //     </Form.Group>

        //     <Form.Group controlId="formBasicPassword">
        //         <Form.Label>Password</Form.Label>
        //         <Form.Control type="password" placeholder="Password" />
        //     </Form.Group>
        //     <Form.Group controlId="formBasicCheckbox">
        //         <Form.Check type="checkbox" label="Check me out" />
        //     </Form.Group>
        //     <Button variant="primary" type="submit">
        //         Submit
        // </Button>
        // </Form>
        <Container>

            <Row>
                <Col style={{backgroundColor:'red'}} xs lg="6">
                    3 of 3
            </Col>
            </Row>
        </Container>

    );
}