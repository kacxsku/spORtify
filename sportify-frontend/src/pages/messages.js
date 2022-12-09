
import React from "react";
import { Menu } from '../components/Menu';
import ChatHome from '../components/ChatHome'

const Chat = () => {
    return (
        <div className="PageContent">
            <Menu />
            <div className="content">
                <ChatHome />
            </div>
        </div>
    )
}

export {Chat};