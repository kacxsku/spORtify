import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { Menu } from '../components/Menu';
import {RightPageContent} from '../components/RightPageContent'
import '../styles/activity.css'
import { useNavigate } from "react-router-dom";
import '../styles/common.css'
import { Paper } from '@material-ui/core';
import { Avatar, Rating, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

function stringToColor(string) {
    let hash = 0;
    let i;
      for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const actions = [
    { icon: <EditIcon />, name: 'Edit', url: '/edit' },
    { icon: <DeleteIcon />, name: 'Delete',  url: '/delete' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

const Activity = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(null);
    const handleRateChange = (newValue) =>{
        setValue(newValue);
    }
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = (pageUrl) =>{
        const url = window.location.pathname + pageUrl
        navigate(url)
    }

    return (
        <div className="PageContent">
            <Menu />
            <div className="content">
                    <Paper className='ActivityDetails' elevation={5} style={{padding: "1.5em"}}>
                        <Typography variant="h6" gutterBottom p={1}>
                            Titlef
                        </Typography>
                        <div >
                            {/* mapa */}
                        </div>
                        <Typography pb={2} pl={1} width={"24em"}>
                            Content Content Content Content Content Content Content Content Content Content Content Content
                            Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content
                        </Typography>
                        <Box>
                            <Typography variant="h5" pb={2} pl={1}>date: </Typography>
                            <Typography variant="h5" pb={2} pl={1}>category: </Typography> 
                        </Box>
                        <Box className='opinion' mb={2}>
                                <Typography variant="h6" pl={1} mr={"1em"}>Activity opinion:</Typography>
                                <Rating name="activityRate" onChange={handleRateChange} />
                        </Box>
                        <Typography pl={1} mb={"1em"} variant="h6" >Participant:</Typography>
                        <Box className='ParticipantDetails'>
                            <Avatar {...stringAvatar('Kent Dodds')} />
                            <Typography variant="h5" pl={1} mr={"1em"}>Kent Dodds</Typography>
                            <Rating name="ParticipantRate" onChange={handleRateChange} />
                        </Box>
                        <SpeedDial className='ActivitiesActionDial'     
                            ariaLabel="SpeedDial controlled open example"
                            icon={<AppsIcon />}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            open={open}
                            >
                            {actions.map((action) => (
                                    <SpeedDialAction
                                        key={action.name}
                                        icon={action.icon}
                                        tooltipTitle={action.name}
                                        onClick={() => handleClick(action.url)}
                                    />
                                    ))}
                        </SpeedDial>
                    </Paper>
            </div>
            <RightPageContent />
        </div>
    )
}




export {Activity};