import React from "react";
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
                <ActivititesFilters />
                <div className="SearchAnnouncementList">
                    <SearchInput />
                    <ActivitiesList />
                </div>
            </div>
            <RightPageContent />
        </div>
    )
}

export {Home};