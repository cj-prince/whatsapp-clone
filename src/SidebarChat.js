import React from 'react';
import './SidebarChat.css';
import {Avatar} from "@material-ui/core";

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar />
            <div className='sidebarChat__info'>
                <h2>Name</h2>
                <p> message</p>
            </div>
        </div>
    )
}

export default SidebarChat
