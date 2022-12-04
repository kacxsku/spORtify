import React, {useState, useContext, useEffect} from 'react';
import Box from '@mui/material/Box';
import { Menu } from '../components/Menu';
import {RightPageContent} from '../components/RightPageContent'
import '../styles/activity.css'
import { useNavigate } from "react-router-dom";
import '../styles/common.css'
import { Paper } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AppsIcon from '@mui/icons-material/Apps';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import { MapView } from '../mapbox/map';
import Avatar from 'react-avatar';
import announcementService from '../service/announcementService'
import CircularProgress from '@mui/material/CircularProgress';


  const actions = [
    { icon: <EditIcon />, name: 'Edit', url: '/edit' },
    { icon: <DeleteIcon />, name: 'Delete',  url: '/delete' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

const Activity = () => {
    const[activity, setActivity] = useState(null)
    const [isLoading, setLoading] = useState(true);
    const [value, setValue] = useState(null);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const activityId = window.location.pathname.match( /\d+/ )[0];

    useEffect(() => {
      announcementService.getAnnouncement(activityId)
      .then(announcement => {
          setActivity(announcement);
          setLoading(false);
          console.log("get all announcement operation successfully finish", announcement);
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

    const handleRateChange = (newValue) =>{
        setValue(newValue);
    }

    const handleClick = (pageUrl) =>{
        if(pageUrl === '/delete'){
          console.log("delete");

        } else {
          console.log("edit");
          navigate(window.location.pathname+pageUrl)
        }
    }

    return (
        <div className="PageContent">
            <Menu />
            {!isLoading &&(
            <div className="content">
                    <Paper className='ActivityDetails' elevation={5} style={{padding: "1.5em", overflow: "hidden"}}>
                        <div className="TitleMap" >
                          <Typography variant="h6" gutterBottom p={1} height="1em" >
                              {activity.title}
                          </Typography>
                          <Box sx={{marginLeft: "22em"}}>
                            {/* <MapView /> */}
                          </Box>
                        </div>
                        <Typography pb={2} pl={1} width={"24em"}>
                            {activity.content}
                        </Typography>
                        <Box>
                            <Typography variant="h5" pb={2} pl={1}>date: {activity.date}</Typography>
                            <Typography variant="h5" pb={2} pl={1}>category: </Typography> 
                        </Box>

                        {activity.participant ? (
                        <Typography pl={1} mb={"1em"} variant="h6" >Participant:</Typography>
                        ) : null}
                        <div className='holder'>
                          {activity.participant ? (
                          <Box className='ParticipantDetails' >
                          <Avatar className="avatar" name="{user.name} "/>
                              <Typography variant="h5" pl={1} mr={"1em"}>Kent Dodds</Typography>
                              <Rating name="ParticipantRate" onChange={handleRateChange} />
                          </Box>
                          ) : null}

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
                        </div>
                    </Paper>
            </div>
            )}
            <RightPageContent />
        </div>
    )
}




export {Activity};