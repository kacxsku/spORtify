import React, {useState, useEffect} from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from '../components/Menu';
import {RightPageContent} from '../components/RightPageContent'
import { RoundedIconButton } from '../components/Buttons';
import { Calendar } from '../components/Calendar';
import { ActivititesFilters } from '../components/Filters';
import '../styles/home.css'
import '../styles/common.css'
import TextField from '@mui/material/TextField';
import { ActivitiesList } from "../components/ActivitiesList";
import announcementsService from '../service/announcementsService'
import announcementService from "../service/announcementService";
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button'






const Home = () => {
    const [isLoading, setLoading] = useState(true);
    const [announcements, setAnnouncements] = useState([]);
    const [currentAnnouncement, setCurrentAnnouncement] = useState("");

    useEffect(() => {
        announcementsService.getAllAnnouncements()
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

    console.log("adsass",announcements)
    return (
        <div className="PageContent">
            <Menu />
            <div className="content">
                <ActivititesFilters />
                <div className="SearchAnnouncementList">
                    <SearchInput />
                    {!isLoading && <ActivitiesList announcements={announcements} path="activity/"  />}
                    
                </div>
            </div>
            <RightPageContent />
        </div>
    )
}

export {Home};