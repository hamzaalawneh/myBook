import React, { useState } from 'react';
export default function PostBox(props) {
    // Declare a new state variable, which we'll call "count"
    //   const [email, setEmail] = useState();
    //   const [password, setPassword] = useState();
    return (
        <div style={{ width: '90%', minHeight: '25%', borderRadius: '10px', backgroundColor: 'white', marginTop: '15px', border: '2px solid #a9a9a9', padding: 5 }}>
            <p style={{ borderBottom: '1px dotted  grey', textAlign: "center", fontFamily: 'Sans-serif' }}>{props.data.userName}</p>
            <p style={{ fontFamily: 'Sans-serif' }}>{props.data.postContent} </p>
        </div>
    );
}