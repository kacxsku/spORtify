import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../styles/common.css'
import { MapView } from '../mapbox/map';


const Announcement = () => {

    return (
        <div>
                <Paper sx={{
                    p: 2,
                    flexGrow: 1
                    }}
                    style={{
                        height: "9em",
                        width: "40em"
                    }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary" fontSize={10}>
                                ID: 1030114
                            </Typography>
                            <Typography variant="body2"  gutterBottom fontSize={12} sx={{
                                width: "29em",
                                height: "7em",
                                overflow: "hidden"
                                }}>
                                Full resolution 1920x1080 • JPEGdadsdsaasdasdaddDDDDDDDDDDDDDDDDDDDDDDDDDDDDD DDDDDDDDDDDDD
                                Full resolution 1920x1080 • JPEGwefDWGE WGEGG   WEETQ   
                                Full resolution 1920x1080 • JPEG
                                Full resolution 1920x1080 • JPEG
                                Full resolution 1920x1080 • JPEG
                                Full resolution 1920x1080 • JPEG
                                Full resolution 1920x1080 • JPEG
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <MapView />
                        </Grid>
                        </Grid>
                    </Grid>
                </Paper>
        </div>
    )
}

export {Announcement};