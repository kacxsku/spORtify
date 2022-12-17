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
import {timer, sendNotification} from "../notifications/sendNotification"

const Home = () => {
    const [isLoading, setLoading] = useState(true);
    const [announcements, setAnnouncements] = useState([]);
    const [currentAnnouncement, setCurrentAnnouncement] = useState("");
  
    setInterval(() => {
      console.log("time");
        const activities = JSON.parse(localStorage.getItem('announcements'));
        console.log("announcementsnot", activities);
        activities.forEach(function(activity) {
          var time = timer(activity);
            if(time) {   
              sendNotification(activity);
              console.log("email sended");
          }
      })
    }, 10000)

    useEffect(() => {
        announcementsService.getAllAnnouncements()
        .then(announcements => {
            setAnnouncements(announcements);
            localStorage.setItem("announcements", JSON.stringify(announcements));
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
                    sx={{width: "30em", height: "4em", size: "small", marginRight: "1em"}}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <RoundedIconButton id="searchButton" Icon={SearchIcon}/>
                <Calendar />
            </div>
        )
    }

    return (
        <div className="PageContent">
            {/* <Menu /> */}
            <div className="content" style={{alignItems: "center"}}>
                <ActivititesFilters />
                <div className="SearchAnnouncementList">
                    <SearchInput />
                    {console.log("check home")}
                    {!isLoading && 
                    <ActivitiesList announcements={announcements} path="activity/" style={{bgcolor: 'background.paper', margin: "0.5em", alignItems:"center"}} />
                    }
                    
                </div>
            </div>
            <RightPageContent />
        </div>
    )
}

export {Home};