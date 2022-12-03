import React, {useState, useEffect} from "react";
import { Menu } from '../components/Menu';
import {RightPageContent} from '../components/RightPageContent'
import { ActivitiesList } from "../components/ActivitiesList";
import announcementsService from '../service/announcementsService'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const Profile = () => {
    const [isLoading, setLoading] = useState(true);
    const [announcements, setAnnouncements] = useState([]);
    const user = localStorage.getItem('user');
    const userJson = JSON.parse(user)

    useEffect(() => {
        announcementsService.getAllAnnouncementsForParticipant(userJson.userId)
        .then(announcements => {
            setAnnouncements(announcements);
            setLoading(false);
            console.log("get all announcement operation successfully finish", announcements);
        }).catch(error => {
            console.log("unable to get all announcements",error)
        })
    }, []);

    if (isLoading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%"
                }}>
                    <CircularProgress />
            </div>
        )
      }
    

    return (
        <div className="PageContent">
            <Menu />
            <div className="content">
                {!isLoading && ( announcements.length === 0 ? (                          
                <Typography gutterBottom variant="subtitle1" component="div">
                    No data ...
                </Typography>) : <ActivitiesList data={announcements} />)}
            </div>
            <RightPageContent />
        </div>
    )
}
export {Profile};