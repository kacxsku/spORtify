import React, {useState, useEffect} from "react";
import { Menu } from '../components/Menu';
import {RightPageContent} from '../components/RightPageContent'
import { ActivitiesList } from "../components/ActivitiesList";
import announcementsService from '../service/announcementsService'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/activity.css'
import { useNavigate } from "react-router-dom";
import '../styles/common.css'
import { Paper } from '@material-ui/core';
import { Rating } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AppsIcon from '@mui/icons-material/Apps';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import { MapView } from '../mapbox/map';
import Avatar from 'react-avatar';

const actions = [
    { icon: <EditIcon />, name: 'Edit', url: '/edit' },
    { icon: <DeleteIcon />, name: 'Delete',  url: '/delete' },
    { icon: <ShareIcon />, name: 'Share' },
];

const Actions = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClick = (pageUrl) =>{
        if(pageUrl === '/delete'){
          console.log("delete");

        } else {
          console.log("edit");
          navigate(window.location.pathname+pageUrl)
        }
    }
    return(
            <SpeedDial className='ActivitiesActionDial'     
                ariaLabel="activity actions"
                icon={<AppsIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                sx={{
                // marginLeft: "15em",
                // marginTop: "-11em"
                marginLeft: "36.5em",
            }}
                >
                {actions.map((action) => (
                        <SpeedDialAction 
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => handleClick(action.url)}
                            sx={{
                            margin: "1em"
                            }}
                        />
                        ))}
            </SpeedDial>
    )
}

const Activities = () => {
    const [isLoading, setLoading] = useState(true);
    const [announcements, setAnnouncements] = useState([]);
    const user = localStorage.getItem('user');
    const userJson = JSON.parse(user)

    useEffect(() => {
        // announcementsService.getAllAnnouncementsCreatedByUser(userJson.userId)
        announcementsService.getAllAnnouncementsCreatedByUser(1)
        .then(announcements => {
            setAnnouncements(announcements);
            console.log("SA",announcements)
            setLoading(false);
            console.log("get all announcement for user operation successfully finish", announcements);
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
{            console.log("SA",announcements)
}
                {!isLoading && ( !announcements || announcements.length === 0 ? (                          
                <Typography gutterBottom variant="subtitle1" component="div">
                    No data ...
                </Typography>) : <ActivitiesList announcements={announcements} path="activity/"   />)}
            </div>
            <RightPageContent />
        </div>
    )
}

export {Activities, Actions};