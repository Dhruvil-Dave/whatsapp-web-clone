import React,{ useEffect, useState} from "react";
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import {AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat(){
    
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));
    }, []);
    
    const sendMessage = (e) =>{
        e.preventDefault();
        console.log("You Types >> ", input);
        setInput("");
    }
    
    return(
    <div className="chat">
        <div className="chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat_headerInfo">
                <h3>Room Name</h3>
                <p>Last seen ... </p>
            </div>
            <div className="chat_headerRight">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className="chat_body">
            <p className={`chat_message ${true && "chat_receiver"}`}><span className="chat_name">Dhruvil</span>Hey Guys
            <span className="chat_timestamp">12:37PM</span>
            </p>
            
        </div>
        <div className="chat_footer">
            <InsertEmoticonIcon/>
            <form>
                <input value={input} type="text" placeholder="Type a message" onChange={(e)=>setInput(e.target.value)}/>
                <button type="submit" onClick={sendMessage}>Send a message</button>
            </form>
            <MicIcon/>
        </div>
    </div>
    );
}

export default Chat;