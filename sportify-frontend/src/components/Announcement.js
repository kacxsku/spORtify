import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ListItem } from "@mui/material";
import '../styles/common.css'

const Announcement = () => {
 
    return (
        <div>
                <Paper sx={{
                    p: 2,
                    flexGrow: 1
                    }}
                    style={{
                        height: "8em",
                        width: "40em"
                    }}>
                    <Grid container spacing={2}>
                        <Grid item>
                        {/* <ButtonBase sx={{ width: 128, height: 128 }}> */}
                            {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                        {/* </ButtonBase> */}
                        </Grid>
                        <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Standard license
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: 1030114
                            </Typography>
                            </Grid>
                            <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                Remove
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                            $19.00
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                </Paper>
        </div>
    )
}

export {Announcement};