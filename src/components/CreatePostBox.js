import React, { useState, } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export default function CreatePostBox() {
    // Declare a new state variable, which we'll call "count"
    const [status, setStatus] = useState();

    return (
        <div style={{ width: '90%', minHeight: '25%', borderRadius: '10px', backgroundColor: 'white', marginTop: '15px', border: '2px solid #a9a9a9', padding: 5, display: 'flex', flexDirection: 'column' }}>
            <p style={{ borderBottom: '1px dotted  grey', textAlign: "center", fontFamily: 'Sans-serif' }}>Whats your status? </p>
            <textarea style={{ width: '100%', height: '75%' }} value={status} onChange={(event) => setStatus(event.target.value)} />
            <Button className={'mt-2'} style={{ backgroundColor: 'red', border: 0 }} variant="primary"> Publish</Button>
        </div>
    );
}