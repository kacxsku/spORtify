import React, {useState, useRef} from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Menu } from '../components/Menu';
import {RightPageContent} from '../components/RightPageContent'
// import '../styles/chat.css'
import {useCollectionData} from 'react-firebase-hooks/firestore'


firebase.initializeApp({
    apiKey: "AIzaSyBfKvq_DDhSRlwcv3qMxuyWgHUG9Q41pMM",
    authDomain: "sportify-b6849.firebaseapp.com",
    projectId: "sportify-b6849",
    storageBucket: "sportify-b6849.appspot.com",
    messagingSenderId: "571446114188",
    appId: "1:571446114188:web:8ca93b125a0f855bf008a9",
    measurementId: "G-RJK0D5QLR2"
})

const firestore = firebase.firestore();

function Chat({uid, photoURL}) {
  
    return (
        <div className="PageContent">
            <Menu />
            <div className="content">
                <ChatRoom uid={uid} photoURL={photoURL} />
            </div>
            <RightPageContent />
      </div>
    );
}

function ChatRoom(uid, photoURL) {
const dummy = useRef();
const messagesRef = firestore.collection('messages');
const query = messagesRef.orderBy('createdAt').limit(25);

const [messages] = useCollectionData(query, { idField: 'id' });

const [formValue, setFormValue] = useState('');


const sendMessage = async (e, uid, photoURL) => {
    e.preventDefault();

    await messagesRef.add({
    text: formValue,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    uid,
    photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
}

return (<>
    <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
    </main>
    <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
        <button type="submit" disabled={!formValue}>🕊️</button>
    </form>
</>)
}


function ChatMessage(props) {
const { text, uid, photoURL } = props.message;

// const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

return (<>
    <div className={`message ${text}`}>
    <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
    <p>{text}</p>
    </div>
</>)
}


export {Chat};