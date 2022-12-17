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
    SERVICE: 'service_ibkhkl5',
    TEMPLATE_ID: 'template_33asp8m',
    PUBLIC_KEY: 'Zg3AYn_ovj4Yx3eVo'
}


const deleteItemAfterMeeting = (item) => {
    const announcements = JSON.parse(localStorage.getItem('announcements'));
    const ann = announcements.filter(obj => {return obj.announcementId != item.announcementId;});
    console.log("deleted");
    localStorage.setItem("announcements", JSON.stringify(ann));
}	

const timer = (activity) => {
    console.log("notification?", activity)
    // różnica czasów wyslania powiadomienia w minutach
    const notificationsTimeInMinutes = [60, 180, 300, 1440];
    const deadline = activity.date;
    console.log(deadline);
    // const deadline = "2022-12-10 16:55";
    const date = new dayjs(new Date());
    console.log("actual date", date);
    const deadlineDate = new dayjs(deadline);
    console.log("deadline", deadlineDate);

    //różnica między datami w minutach
    let diff = deadlineDate.diff(date, "m");     
    console.log("diff", diff) 
    console.log("dddd", notificationsTimeInMinutes.includes(diff)) 

    if(diff < 50 ){
        deleteItemAfterMeeting(activity);
    } 
    else {
        return notificationsTimeInMinutes.includes(diff) ?  true : false;
    }
};

//wysylanie wiadomośći e-mail za pomocą biblioteki email.js
const sendNotification = (notificationData) => {
    console.log(notificationData.creator.userId);
    const notificationMessage = 'You have planned appointment on ' + notificationData.date ;
    console.log(notificationMessage);

    const templateParams = {
        to_mail: "kacperspam23@gmail.com",
        to_name: notificationData.creator.name,
        message: notificationMessage
    }

    emailjs.init(apiKey.PUBLIC_KEY);
    emailjs.send(apiKey.SERVICE, apiKey.TEMPLATE_ID, templateParams).then(
        (result) => {
            console.log("Message Sent, We will get back to you shortly", result.text);
    }, (error) => {
        console.log("An error occurred, Please try again", error.text);
    });

    const notification = {
        userId: notificationData.creator.userId,
        title: "spORtify notification",
        message: notificationMessage
    }

    notificationService.createNotificationForUser(notification)

};

export {sendNotification, timer}
