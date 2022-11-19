import React, {Fragment} from 'react';
import { Menu } from '../components/Menu';
import {RightPageContent} from '../components/RightPageContent'
import '../styles/notifications.css'
import '../styles/common.css'
import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import GradeIcon from '@mui/icons-material/Grade';

const Notifications = () => {
    return (
        <div className="PageContent">
            <Menu />
            <div className="NotificationsContent">
                <List className='NotificationsList' sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem className='NotificationsListItem' sx={{
                        border: '0.5px solid #C5C6D0',
                        width: "45em",
                        height: "5em",
                        padding: "0.5em"
                    }}>
                    <GradeIcon fontSize='large' sx={{marginRight: "0.5em"}}/> 
                    {/* <AccessibilityNewIcon fontSize='large'/> */}
                    {/* <ScheduleIcon fontSize='large' /> */}
                    {/* <CalendarTodayIcon fontSize='large' /> */}

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
                            {/* <Divider variant='inset' coponent='li' width="100%" /> */}
                            </Fragment>
                        }
                    />
                    </ListItem>
                </List>
            </div>    
            <RightPageContent />
        </div>
    )
}

export {Notifications};