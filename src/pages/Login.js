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


        <Container>
            <div style={{ display: 'flex' }}>
                <div style={{ backgroundColor: "red" }}>
                    <p>fdfdfd</p>
                </div>
            </div>
        </Container>

    );
}