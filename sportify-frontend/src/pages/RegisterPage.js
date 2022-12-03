import React, {useState} from "react";
import { Radio ,RadioGroup, FormControlLabel, Grid } from "@material-ui/core";
import '../styles/LoginPage.css'
import '../styles/common.css'
import '../styles/registerPage.css'
import {AppHeader} from '../components/Header'
import { FormTextField, FormPasswordField, MulitlineFormTextField } from "../components/FormTextFields";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import authorizationService from '../service/authorizationService'


const RegisterPage = () => {

    let navigate = useNavigate(); 

    const handleSubmit = evt => {
        console.log("handle");
        evt.preventDefault();
        const newUser = {
            name : evt.target.RegisterFormNameTextField.value,
            surname: evt.target.RegisterFormsurnameextField.value,
            email: evt.target.RegisternFormEmailTextField.value,
            phoneNumber: evt.target.RegisterFormPhoneNumberTextField.value,
            gender: evt.target.gender.value,
            password: evt.target.RegisterFormPasswordTextField.value,
            city: evt.target.RegisterFormCityTextField.value,
            description: evt.target.RegisterFormDescriptionMultilineTextField.value
        };

        authorizationService.registerUser(newUser);
        navigate("/")
    }

    return (  
        <div className="Page">
            <AppHeader />
            <div className="PageContent">
                <div className="PageCenter">
                        <p className="PageContent1">For</p>
                        <p className="PageContent2">Your</p>
                        <p className="PageContent3">Health</p>
                        <p className="PageContent4">Motivate Yoursefl</p>
                </div>
                <Box component="form" className="RegistrationForm" onSubmit={handleSubmit}                 
                    noValidate
                    autoComplete="off">
                    <Grid container>
                        <Grid item xs={6}>
                            <FormTextField id="RegisterFormNameTextField" name="name" label = "name" />
                        </Grid>
                        <Grid item xs={6}>
                            <FormTextField id="RegisterFormsurnameextField" label = "surname" />
                        </Grid>
                        <Grid item xs={6} >
                            <FormTextField id="RegisternFormEmailTextField" label = "email" />
                        </Grid>
                        <Grid item xs={6} >
                            <FormTextField id="RegisterFormPhoneNumberTextField" label = "phone number" />
                        </Grid>
                    </Grid>
                    <RadioGroup className="GenderForm" id="RegisterFormGenderRadioGroup" name="gender" row={true} style={{marginTop: "1em"}} defaultValue="female" >
                        <FormControlLabel value="male" control={<Radio color="primary" />} label="man"/>
                        <FormControlLabel value="female" control={<Radio  color="primary" />} label="woman"/>
                        <FormControlLabel value="not specified" control={<Radio color="primary" />} label="not specified"/>
                    </RadioGroup>
                    <Grid container >
                        <Grid item xs={6}>
                            <FormPasswordField id="RegisterFormPasswordTextField" label = "password" />
                        </Grid>
                        <Grid item xs={6}>
                            <FormPasswordField id="RegisterFormRepeatPasswordTextField" label = "repeat password" />
                        </Grid>
                    </Grid>
                    <FormTextField id="RegisterFormCityTextField" label = "city" />                    
                    <MulitlineFormTextField rows="4" id="RegisterFormDescriptionMultilineTextField" label = "write something about You" />
                    <Button type={"submit"} 
                        variant="contained"
                        style={{marginTop: "1.5em",
                            borderRadius: 2,
                            backgroundColor: "#758BFD",
                            padding: "18px 36px",
                            fontSize: "1.2em",
                            fontWeight: "bold",
                            color: "white",
                            minWidth: '21em', 
                            minHeight: '3em'}}
                        >Register</Button>
                </Box>
            </div>
        </div>
    )
}

export {RegisterPage}