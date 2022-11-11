import React from "react";
import { FixedSizeList } from 'react-window';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SearchIcon from '@mui/icons-material/Search';
import PoolIcon from '@mui/icons-material/Pool';
import Stack from '@mui/material/Stack';
import { Announcement } from "../components/Announcement";
import { Menu } from '../components/Menu';
import { RoundedIconButton } from '../components/Buttons';
import { Calendar } from '../components/Calendar';
import '../styles/home.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

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

const Home = () => {
    
    const SearchInput = () => {
        return (
            <div className="Search">
                <TextField
                    sx={{width: "30em", height: "4em", size: "small", marginRight: "2em"}}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <Calendar />
                <RoundedIconButton id="searchButton" Icon={SearchIcon}/>
            </div>
        )
    }

    return (
        <div className="PageContent">
            <Menu />
            <div className="content">
                <div className="SearchAnnouncementList">
                    <SearchInput />
                    <Box sx={{ width: '45em', height: 600, bgcolor: 'background.paper' }}>
                        <FixedSizeList
                            width={"45em"}
                            height={600}
                            itemSize={100}
                            itemCount={4}
                            overscanCount={5}>
                            {renderRow}
                        </FixedSizeList>
                    </Box>
                </div>
                <Stack direction="column" spacing={1} style={{
                    marginRight: "0"
                    }}>
                    <RoundedIconButton id="jogginButton" Icon={DirectionsRunIcon}/>
                    <RoundedIconButton id="jogginButton" Icon={DirectionsBikeIcon}/>
                    <RoundedIconButton id="jogginButton" Icon={PoolIcon}/>
                    <RoundedIconButton id="jogginButton" Icon={FitnessCenterIcon}/>
                    <RoundedIconButton id="jogginButton" Icon={SportsGymnasticsIcon}/>
                    <RoundedIconButton id="jogginButton" Icon={SportsSoccerIcon}/>
                    <RoundedIconButton id="jogginButton" Icon={SportsTennisIcon}/>
                    <RoundedIconButton id="jogginButton" Icon={SportsMmaIcon}/>
                    <RoundedIconButton id="jogginButton" Icon={QuestionMarkIcon}/>
                </Stack>
            </div>
        </div>
    )
}

export {Home};