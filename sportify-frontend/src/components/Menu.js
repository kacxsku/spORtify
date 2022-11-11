import React from "react";
import {SidebarLink} from '../components/SidebarLink'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import '../styles/menu.css'

 
const Menu = () => {
    const navigate = useNavigate();

    function handlePageChange(pageUrl){
        navigate(pageUrl)
    }

    return (
            <ul className="menu">
                <li className="MenuUserData" onClick={() => handlePageChange("/profile")}>
                    <img className="avatar" src="images/avatar.png" alt="Avatar"/>
                    <p>Jan kowalski</p>
                </li>
                <li onClick={() => handlePageChange("/home")}>
                    <SidebarLink text="Home" Icon={HomeIcon}/>
                </li >
                <li onClick={() => handlePageChange("/notifications")}>
                    <SidebarLink text="Notifications" Icon={NotificationsIcon} />
                </li>
                <li onClick={() => handlePageChange("/activites")}>
                    <SidebarLink text="Activites" Icon={CalendarMonthIcon}  />
                </li>
                <li onClick={() => handlePageChange("/profile")}>
                    <SidebarLink text="Profile" Icon={AccountBoxIcon}  />
                </li>
                <li onClick={() => handlePageChange("/settings")}>
                    <SidebarLink text="Settings" Icon={SettingsApplicationsIcon}/>
                </li>
                <li onClick={() => handlePageChange("/")}>
                    <SidebarLink text="Logout" Icon={LogoutIcon}/>
                </li>
                <Button style={{
                    marginTop: "auto",
                    width: "17 em",
                    height: "4em",
                    background: "#A8B6FF",
                    borderRadius: "30px",
                    }}
                    onClick={() => handlePageChange("/add/activity")}>Add Announcement</Button>

            </ul> 
        )
}

export {Menu};