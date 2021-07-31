import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { getLocations, getMessages } from './controllers/dataController';
import { getSource } from './reference/imageList';
import Message from './Message';

const LocationChat = (props) => {
    let [messages, setMessages] = useState([]);
    let [location, setLocation] = useState({ name:"Loading...", img:"" });
    const { id } = useParams();

    let imgSource = getSource(location.image);

    useEffect(() => {
        getLocations().then((data) => {
            let loc = data.find(loc => loc._id === id)
            setLocation(loc);
        }).then(getMessages().then((messages) => {
            let msgs = messages.filter(msg => msg.location === id)
                .map(Message);
            setMessages(msgs);
        }))
    });

    const submitHandler = (e) => {
        e.preventDefault();
    }
    
    return (
        <>
            <h1>{location.name}</h1>
            <img src={imgSource} alt={location.image} />
            <div className="msg-container">
                {messages}
            </div>
            <form onSubmit={submitHandler} className="msg-form">
                <label htmlFor="msg-input">Add a new message: </label>
                <input type="text" name="msg-input" id="msg-input" />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default LocationChat
