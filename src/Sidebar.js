import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src="" />
                <div className='sidebar__headerRight'>
                    <IconButton  >
                        <DonutLargeIcon  /> 
                    </IconButton>
                    <IconButton> <ChatIcon />  </IconButton>
                    <IconButton> <MoreVertIcon />  </IconButton>
                </div>
            </div>

            <div className='sidebar__search'> 
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder='Search' type='text' />
                </div>
            </div>
            <div className='sidebar__chats'>
                <h1>Add new Chat</h1>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>
        </div>
    )
}

export default Sidebar



