import React, {Fragment, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import '../styles/notifications.css'
import '../styles/common.css'
import {ListItem, ListItemText, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import GradeIcon from '@mui/icons-material/Grade';

const apiKey = {
    SERVICE: 'service_r11d3gh',
    TEMPLATE_ID: 'template_ux2uwpc',
    PUBLIC_KEY: 'QF-Y-huSAbPCBNgaQ'
}

const notificationTemplates = {
    1 : "You have planned appointment on "
}

var templateParams = {
    to_mail: "kacperspam23@gmail.com",
    to_name: 'James',
    message: 'You have planned appointment on '
};

const timer = (deadline) => {
    const dateObj = new Date();

    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    month = ('0' + month).slice(-2);
    let date = dateObj.getDate();
    date = ('0' + date).slice(-2);
    let hour = dateObj.getHours();
    hour = ('0' + hour).slice(-2);
    let minute = dateObj.getMinutes();
    minute = ('0' + minute).slice(-2);
    const time = `${year}-${month}-${date} ${hour}:${minute}`;
    console.log(time); 

    return time === deadline ? true : false
};

const sendEmail = () => {
    emailjs.init(apiKey.PUBLIC_KEY);

    emailjs.send(apiKey.SERVICE, apiKey.TEMPLATE_ID, templateParams).then(
        (result) => {
            console.log("Message Sent, We will get back to you shortly", result.text);
    }, (error) => {
        console.log("An error occurred, Please try again", error.text);
    });
};

const sendPush = () => {
    return (
        <div>
        <ListItem className='NotificationsListItem' sx={{
            border: '0.5px solid #C5C6D0',
            width: "45em",
            height: "5em",
            padding: "0.5em"
        }}>
        <GradeIcon fontSize='large' sx={{marginRight: "0.5em"}}/> 
        <ListItemText
            primary="Brunch this weekend?"
            secondary={
                <Fragment>
                    <Typography
                        sx={{ display: 'inline', width: '100em' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Ali Connors
                    </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
                </Fragment>
            }
        />
        </ListItem>
        </div>
    )
}

export {sendEmail, timer, sendPush}
