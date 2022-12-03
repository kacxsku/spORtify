import React, { useContext, useState }  from 'react';
import {AddActivityModal} from '../components/AddActivity'
import Card from '@mui/joy/Card';
import Typography from '@mui/material/Typography';
import '../styles/common.css'
import avatar from '../assets/avatar.png' 
import { UserContext } from "../userContext";
import Avatar from 'react-avatar';
import CircularProgress from '@mui/material/CircularProgress';

const RightPageContent = () =>{

    const user = useContext(UserContext);
    if (!user) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "26.2%",
                height: "80%"
                }}>
                    <CircularProgress />
            </div>
        )
      }

      return(
        <div className="RightPageContent">
            <Card variant="outlined" sx={{
                border: 1,
                borderColor: "#605D5D"
            }}>
                <div className="CardData">
                    <div className="UserData">
                        {user.photo !== null ? <img className="avatar" src={avatar} alt="Avatar"/> : <Avatar className="avatar" name={user.name} />}
                        <Typography> {user.name}</Typography>
                    </div>
                    <div className="AdditionalData" >
                        <a href='https://www.spotify.com/' target="_blank" rel='noreferrer'>Spotify</a>
                        <a href='https://www.kartamultisport.pl/' target="_blank" rel='noreferrer'>Multisport</a>
                    </div>
                </div>
            </Card>
            <AddActivityModal />
        </div>
    )
}

export {RightPageContent};