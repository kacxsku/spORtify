import { Menu } from '../components/Menu';
import {RightPageContent} from '../components/RightPageContent'
import React, {useState, useRef, forwardRef, useContext} from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Calendar } from '../components/Calendar';
import { ActivititesFilters } from "../components/Filters";
import Box from '@mui/material/Box';
import {MapFinder} from '../mapbox/map';
import '../styles/AddActivityForm.css'
import announcementService from '../service/announcementService'
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import '../styles/activity.css';

const ActivityPrimaryData = ({setFormTitle, setFormDate, setFormTime}) => {
    const [input, setInput] = useState();
    return (
        <div className="ActivityPrimaryData">
            <TextField
            required
            id="EditActivityTextField"
            label="edit title"
            variant="outlined"
            defaultValue="asd"
            onChange={setInput}
            style={{
                marginTop: "0.3em",
                padding: "0.4em"
            }}
            />
        <Calendar setFormDate={setFormDate} setFormTime={setFormTime} />
        <MapFinder />
    </div>
    )
}

const EditActivity = ({props}) => {
    const user = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const [date, setData] = useState();
    const [time, setTime] = useState();
    const [title, setTitle] = useState();
    const navigate = useNavigate();


    const handleSubmit = evt => {
        evt.preventDefault();
        const announcementDto = {
            title: title,
            content: evt.target.AddActivityMulitlineFormTextField.value,
            date: date,
            time: time,
            userId: user,
            skills: "",
            Coordinate: {
                longitude: "",
                latitude: ""
            }
        }
        // announcementService.updateAnnouncement(announcementDto);
        props.onClose()
    }

    const ref = useRef();

    return (
        <div className="PageContent">
            <Menu />
            <div className="content">
            <Box 
        component="form"
        {...props}
        ref={ref} 
        className="ActivityFormBox"
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 820,
            height: 500,
            bgcolor: 'background.paper',
            border: '1px solid #000',
            boxShadow: 15,
            padding: 2}}
            onSubmit={handleSubmit}>
                <div className="NewActivityForm">
                    <ActivititesFilters sx={{margin:0}}/>
                    <div className="ActivityData" sx={{padding: "1em"}}>
                        <ActivityPrimaryData setFormTitle={setTitle} setFormDate={setData} setFormTime={setTime} />
                        <TextField required multiline {...{
                            minRows: 14,
                            id: "AddActivityMulitlineFormTextField",
                            label: "Write activity description",
                            defaultValue: "Something that will stay there initially only",
                            variant: "outlined",
                            style: {
                                width: "30em",
                                marginTop: "1em",
                                marginLeft: "1em",
                                padding: "0.4em", 
                            }}}/>
                    </div>
                    <div className="AddActivityFormButtons">
                        <Button type={"submit"} variant="contained" >Save</Button>
                    </div>
                </div>
        </Box>
            </div>
            <RightPageContent />
        </div>
    )
}

export {EditActivity}