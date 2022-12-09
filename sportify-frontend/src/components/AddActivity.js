import React, {useState, useRef, forwardRef, useContext} from "react";
import { Button, IconButton } from "@material-ui/core";
import { FormTextField,  MulitlineFormTextField } from "../components/FormTextFields";
import { TextField } from "@material-ui/core";
import { Calendar } from '../components/Calendar';
import { ActivititesFilters } from "./Filters";
import AddIcon from '@mui/icons-material/Add';
import MapIcon from '@mui/icons-material/Map';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {MapFinder} from '../mapbox/map';
import '../styles/AddActivityForm.css'
import announcementService from '../service/announcementService'
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const AddActivityModal = () => {
    const ref = useRef();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = () => {
        console.log("close")
        setOpen(false);
    } 

    return (
        <div>
            <IconButton  variant="contained"  style={{
                marginTop: "auto",
                background: "#A8B6FF",
                borderRadius: "30px",
                }} onClick={handleOpen}>
                    <AddIcon fontSize="large"/>
                </IconButton >
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                    {/* <ActivityForm ref={ref} /> */}
                    <ActivityForm ref={ref}  onClose={handleClose} />
            </Modal>
        </div>
    )
}

const ActivityPrimaryData = ({setFormTitle, setFormDate, setFormTime}) => {
    return (
        <div className="ActivityPrimaryData">
        <FormTextField setValue={setFormTitle} id="AddActivityTitleField" label ="Activity title" />
        <Calendar setFormDate={setFormDate} setFormTime={setFormTime} />
        <MapFinder />
    </div>
    )
}

const ActivityForm = forwardRef((props, ref)=> {
    const user = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const [date, setData] = useState();
    const [time, setTime] = useState();
    const [title, setTitle] = useState();
    const [filter, setFilter] = useState();
    const navigate = useNavigate();
    console.log("flt", filter);


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
        console.log("agd",announcementDto);
        // announcementService.createAnnouncement(announcementDto);
        const announcements = JSON.parse(localStorage.getItem('announcements'));
        announcements.push(announcementDto);
        localStorage.setItem("announcements", JSON.stringify(announcements));

        props.onClose()
    }

    return (
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
                    <ActivititesFilters sx={{margin:0}} setFilter={setFilter} />
                    <div className="ActivityData" sx={{padding: "1em"}}>
                        <ActivityPrimaryData setFormTitle={setTitle} setFormDate={setData} setFormTime={setTime} />
                        <TextField required multiline {...{
                            minRows: 14,
                            id: "AddActivityMulitlineFormTextField",
                            label: "Write activity description",
                            style: {
                                width: "30em",
                                marginTop: "1em",
                                marginLeft: "1em",
                                padding: "0.4em", 
                            }}}/>
                    </div>
                    <div className="AddActivityFormButtons">
                        <Button type={"submit"} variant="contained" >Save</Button>
                        <Button onClick={props.onClose}>Cancel</Button>
                    </div>
                </div>
        </Box>
    )
});


export {AddActivityModal, ActivityForm}