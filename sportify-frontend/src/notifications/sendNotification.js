import React, {Fragment} from 'react';
import emailjs from '@emailjs/browser';
import '../styles/notifications.css'
import '../styles/common.css'
import {ListItem, ListItemText, Typography } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import dayjs from "dayjs";
import dayjsDurationPlugin from 'dayjs/plugin/duration';
import notificationService from '../service/notificationService'

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

const deleteItemAfterMeeting = ({item}) => {
    const announcements = JSON.parse(localStorage.getItem('announcements'));
    console.log("an1", announcements);
    var index = announcements.indexOf(item);
    if (index !== -1) {
      announcements.splice(index, 1);
    }
    localStorage.setItem("announcements", JSON.stringify(announcements));
    console.log("an2", announcements);
}	

const timer = (deadline) => {
    // czas wyslania powiadomienia w minutach
    const notificationsTimeInHours = [60, 180, 1440];
    
    const date = new dayjs(new Date());
    const deadlineDate = new dayjs(deadline);
    //różnica między datami w minutach
    const diff = deadlineDate.diff(date, "m");
    console.log(diff);
    if(diff <= 0 ){
        //remove
    }
    return (notificationsTimeInHours.includes(diff+1) || notificationsTimeInHours.includes(diff-1)) ? true : false;
};

//wysylanie wiadomośći e-mail za pomocą biblioteki email.js
const sendEmail = ({notificationData}) => {
    const notificationMessage = 'You have planned appointment on ' + notificationData.date 
;
    const templateParams = {
        to_mail: notificationData.email,
        to_name: notificationData.name,
        message: notificationMessage
    }
    emailjs.init(apiKey.PUBLIC_KEY);
    emailjs.send(apiKey.SERVICE, apiKey.TEMPLATE_ID, templateParams).then(
        (result) => {
            console.log("Message Sent, We will get back to you shortly", result.text);
    }, (error) => {
        console.log("An error occurred, Please try again", error.text);
    });
    notificationService.createNotificationForUser(notificationData.userId, notificationMessage)

};

// const sendPush = () => {
//     return (
//         <div>
//         <ListItem className='NotificationsListItem' sx={{
//             border: '0.5px solid #C5C6D0',
//             width: "45em",
//             height: "5em",
//             padding: "0.5em"
//         }}>
//         <GradeIcon fontSize='large' sx={{marginRight: "0.5em"}}/> 
//         <ListItemText
//             primary="Brunch this weekend?"
//             secondary={
//                 <Fragment>
//                     <Typography
//                         sx={{ display: 'inline', width: '100em' }}
//                         component="span"
//                         variant="body2"
//                         color="text.primary"
//                     >
//                         Ali Connors
//                     </Typography>
//                 {" — I'll be in your neighborhood doing errands this…"}
//                 </Fragment>
//             }
//         />
//         </ListItem>
//         </div>
//     )
// }

export {sendEmail, timer}
