import React from 'react';
import './Chat.css';
import {Avatar, IconButton} from "@material-ui/core";
import AttachFile from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar />
                
                <div className='chat__headerInfo'>
                    <h3>Room name</h3>
                    <p>seen at....</p>
                </div>

                <div className='chat__headerRight'>
                    <IconButton  > <SearchIcon  />  </IconButton>
                    <IconButton> <AttachFile />  </IconButton>
                    <IconButton> <MoreVertIcon />  </IconButton>
                </div>
            </div>

            <div className='chat__body'>
                <p className='chat__message'>
                    <span className='chat__name'>Dave</span>
                    the message
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>

                <p className='chat__message'>
                    <span className='chat__name'>Dave</span>
                    the message
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>
                <p className='chat__message chat__reciever'>
                    <span className='chat__name'>CJ</span>
                    the message
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>

            </div>

            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input placeholder='Type a messagee' type='text' />
                    <button type='submit'>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
