import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export default function SendFriendRequestBox(props) {
    // Declare a new state variable, which we'll call "count"
    const [status, setStatus] = useState();
    
  
    return (
        <div style={{ width: '60%', minHeight: '7%', borderRadius: '10px', backgroundColor: 'white', marginTop: '15px', border: '2px solid #a9a9a9', padding: 5, display: 'flex', flexDirection: 'column' }}>
            <p style={{ borderBottom: '1px dotted  grey', textAlign: "center", fontFamily: 'Sans-serif' }}>{props.name}</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {!props.sentRequests ? <Button className={'mt-2'} style={{ backgroundColor: 'red', border: 0 }} onClick={() => props.sendFriendRequest()} variant="primary"> Send Friend Request</Button> : <Button className={'mt-2'} style={{ backgroundColor: 'grey', border: 0 }} variant="primary"> Request was sent</Button>}
            </div>
        </div>
    );
}