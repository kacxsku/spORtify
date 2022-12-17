import React, {Fragment, useState, useEffect, useContext, useRef} from 'react';
import { Menu } from '../components/Menu';
import {RightPageContent} from '../components/RightPageContent'
import '../styles/notifications.css'
import '../styles/common.css'
import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import GradeIcon from '@mui/icons-material/Grade';
import CircularProgress from '@mui/material/CircularProgress';
import notificationsService from '../service/notificationsService'
import { useUserContextState } from "../context/userContext";


const NotificationsListItem = ({n}) => {
    return (
        <ListItem key={n.notificationId+"N"} className='NotificationsListItem' sx={{
            border: '0.5px solid #C5C6D0',
            width: "45em",
            height: "5em",
            padding: "0.5em",
            margin: "0.7em"
        }}>
        <CalendarTodayIcon fontSize='large' />
        <ListItemText key={n.notificationId+"LT"}
            primary={n.title}
            secondary={n.description}
        />
        </ListItem>
    );
}

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const user = localStorage.getItem('user');
    const userJson = JSON.parse(user)
    console.log("notification")

    useEffect(() => {
        notificationsService.getAllNotificationsForUser(userJson.userId)
        .then(notifications => {
            setNotifications(notifications);
            console.log("get all notifications operation successfully finish", notifications);
        }).catch(error => {
            console.log("unable to get all announcements",error)
        })
    }, []);


    return (
        <div className="PageContent">
                <div className="content" style={{alignItems: "center"}}>
                <List className='NotificationsList' sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {notifications.map(notification => <NotificationsListItem key={notification.notificationId} n={notification} /> )}
                </List>
                </div>
            <RightPageContent />
        </div>
    )
}

export {Notifications};