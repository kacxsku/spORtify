import React from "react";
import { Announcement } from "../components/Announcement";
import { Divider, List, ListItem, ListItemButton, Typography } from '@mui/material';
import '../styles/home.css'
import '../styles/common.css'
import Box from '@mui/material/Box';

const ActivitiesList = ({announcements, path}) => {

  const announcementsList = announcements
  const size = announcementsList.length;

  function RenderRow({announcement}) {
    return (
        <ListItem  className='announcementListItem' >
          <ListItemButton >
            <Announcement  style={{paddingLeft: "0em", marginLeft: "0em"}}  path={path} data={announcement} />
          </ListItemButton>
      </ListItem>
      );
  }

  return(
    <div  >
      <Box className="ActivitiesList" sx={{bgcolor: 'background.paper', margin: "0.5em"}}>
              <List  sx={{ height: "10em", width: '100%', maxWidth: 360}}>
                    {announcementsList.map(an => <RenderRow  key={an.announcementId} announcement={an} />)}
              </List>
          </Box>
    </div>
  )
}

export {ActivitiesList};