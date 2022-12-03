import React from "react";
import { Announcement } from "../components/Announcement";
import { FixedSizeList as List } from "react-window";import '../styles/home.css'
import '../styles/common.css'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

const RenderRow = props => {
  const { data, index} = props;
  console.log(index);

  return (
      <ListItem style={{paddingLeft: "0em", marginLeft: "0em"}} key={index} component="div" disablePadding>
        <ListItemButton>
          {data.map(an => <Announcement data ={an} key={an.announcementId} />)}
        </ListItemButton>
      </ListItem>
    );
}


const ActivitiesList = (announcements) => {

  const announcementsList = announcements.data
  console.log("announcements", announcementsList)
  const size = announcementsList.length;
  console.log("size ", size);

  return(
    <div sx={{marginRight: "auto"}} >
      <Box sx={{ width: '45em', height: 600, bgcolor: 'background.paper' }}>
              <List className="ActivitiesList"
                  width={"45em"}
                  height={600}
                  itemSize={100}
                  itemCount={size}
                  overscanCount={5}
                  itemData={announcementsList}>
                    {RenderRow}                  
              </List>
          </Box>
    </div>
  )
}

export {ActivitiesList};