import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../styles/common.css'
import { MapView } from '../mapbox/map';
import { useNavigate } from "react-router-dom";

const Announcement = ({data}) => {
    const navigate = useNavigate();

    function HandleActivityCLick(id){
      navigate("/activity/".concat(id), {id: id})
    }
  
    const id= data.announcementId;
    console.log(data);
    return (
        <div>
                <Paper sx={{
                    p: 2,
                    flexGrow: 1
                    }}
                    style={{
                        height: "9em",
                        width: "40em"
                    }}
                    onClick={() => HandleActivityCLick(id)}
                    >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontSize={10}>
                                {data.date}
                            </Typography>
                            <Typography variant="body2"  gutterBottom fontSize={12} sx={{
                                width: "29em",
                                height: "7em",
                                overflow: "hidden"
                                }}>
                               {data.content}
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <MapView coordinate={data.coordinate}/>
                        </Grid>
                        </Grid>
                    </Grid>
                </Paper>
        </div>
    )
}

export {Announcement};