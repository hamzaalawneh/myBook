import React, { useState, } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export default function FriendRequestBox(props) {
    // Declare a new state variable, which we'll call "count"
    const [status, setStatus] = useState();

    return (
        <div style={{ width: '90%', minHeight: '7%', borderRadius: '10px', backgroundColor: 'white', marginTop: '15px', border: '2px solid #a9a9a9', padding: 5, display: 'flex', flexDirection: 'column' }}>
            <p style={{ borderBottom: '1px dotted  grey', textAlign: "center", fontFamily: 'Sans-serif' }}>{props.name} sent you a friend request</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Button className={'mt-2'} style={{ backgroundColor: 'red', border: 0 }} onClick={() => props.acceptOrReject(true)} variant="primary"> Accept</Button>
                <Button className={'mt-2'} style={{ border: 0 }} onClick={() => props.acceptOrReject(false)} variant="primary"> Reject</Button>
            </div>
        </div>
    );
}