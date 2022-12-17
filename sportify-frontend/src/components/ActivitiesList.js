import React, {useState} from "react";
import { Announcement } from "../components/Announcement";
import { Divider, List, ListItem, ListItemButton, Typography } from '@mui/material';
import '../styles/home.css'
import '../styles/common.css'
import Box from '@mui/material/Box';
import { Pagination } from "@mui/material";
import usePagination from "./pagination";

const ActivitiesList = ({announcements, path, style, text}) => {
  const [page, setPage] = React.useState(1);

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

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const PER_PAGE = 3;
  const count = Math.ceil(announcementsList.length / PER_PAGE);
  const _DATA = usePagination(announcementsList, PER_PAGE);

  return(
    <div  >
      <Typography  gutterBottom variant="subtitle1" color="text.secondary" component="div" sx={{ fontWeight: 'bold', fontSize: 28}}>
          {text}
      </Typography>
      <Box className="ActivitiesList" >
              <List  sx={style}>
                    {_DATA.currentData().map(an => <RenderRow  key={an.announcementId} announcement={an} />)}
              </List>
      <Pagination
        count={count}
        size="small"
        page={page}
        variant="outlined"
        style={{marginTop: -12}}
        onChange={handleChange}/>
      </Box>
    </div>
  )
}

export {ActivitiesList};