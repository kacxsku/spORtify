import React, {useState, useRef, forwardRef} from "react";
import { Button, IconButton } from "@material-ui/core";
import { FormTextField,  MulitlineFormTextField } from "../components/FormTextFields";
import {Slide, Tooltip} from '@mui/material';
import { Calendar } from '../components/Calendar';
import { ActivititesFilters } from "./Filters";
import AddIcon from '@mui/icons-material/Add';
import MapIcon from '@mui/icons-material/Map';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '../styles/AddActivityForm.css'

const AddActivityModal = () => {
    const ref = useRef();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <ActivityForm ref={ref} />
            </Modal>
        </div>
    )
}


const ActivityForm = forwardRef((props, ref)=> {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = () => {
        console.log("close")
        setOpen(false);
    } 
    
    return (
        <Box 
        {...props}
        ref={ref} 
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            height: 500,
            bgcolor: 'background.paper',
            border: '1px solid #000',
            boxShadow: 15,
            padding: 2}}>
                <div className="NewActivityForm">
                    <ActivititesFilters sx={{margin:0}}/>
                    <div className="ActivityData" sx={{padding: "1em"}}>
                        <div className="ActivityPrimaryData">
                            <FormTextField id="AddActivityTitleField" label = "Activity title" />
                            <Calendar />
                            <IconButton aria-label="map" id="mapButton">
                                <MapIcon />
                            </IconButton>
                        </div>
                        <MulitlineFormTextField  rows="15" id="MulitlineFormTextField" label = "Write activity description" />
                    </div>
                    <div className="AddActivityFormButtons">
                        <Button onClick={() => handleSave()}>Save</Button>
                        <Button onClick={() => handleClose()}>Cancel</Button>
                    </div>
                </div>
        </Box>
    )
});


export {AddActivityModal, ActivityForm}