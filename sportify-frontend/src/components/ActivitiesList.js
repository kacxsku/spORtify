import React from "react";
import { Announcement } from "../components/Announcement";
import { FixedSizeList } from 'react-window';
import '../styles/home.css'
import '../styles/common.css'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useNavigate } from "react-router-dom";

function renderRow(props) {
    const { index } = props;
    return (
      <ListItem style={{paddingLeft: "0em", marginLeft: "0em"}} key={index} component="div" disablePadding>
        <ListItemButton>
          <Announcement />
        </ListItemButton>
      </ListItem>
    );
}


const ActivitiesList = () => {
  const navigate = useNavigate();

  function HandleActivityCLick(pageUrl){
    navigate(pageUrl)
  }

  return(
    <div sx={{marginRight: "auto"}} onClick={() => HandleActivityCLick("/activity/".concat("1"))}>
      <Box sx={{ width: '45em', height: 600, bgcolor: 'background.paper' }}>
              <FixedSizeList className="ActivitiesList"
                  width={"45em"}
                  height={600}
                  itemSize={100}
                  itemCount={4}
                  overscanCount={5}>
                  {renderRow}
              </FixedSizeList>
          </Box>
    </div>
  )
}

export {ActivitiesList};