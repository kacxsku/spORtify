import {React} from "react";
import { Radio ,RadioGroup, FormControlLabel, Grid } from "@material-ui/core";
import '../styles/LoginPage.css'
import '../styles/common.css'
import '../styles/registerPage.css'
import {AppHeader} from '../components/Header'
import {RegisterButton} from '../components/Buttons'
import { FormTextField, FormPasswordField, MulitlineFormTextField } from "../components/FormTextFields";

const RegisterPage = () => {

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
                <form className="RegistrationForm">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <FormTextField id="RegisterFormNameTextField" label = "name" />
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
                    <RadioGroup className="GenderForm" row={true} style={{marginTop: "1em"}} defaultValue="female" >
                        <FormControlLabel value="male" control={<Radio color="primary" />} label="man"/>
                        <FormControlLabel value="female" control={<Radio  color="primary" />} label="woman"/>
                        <FormControlLabel value="not specified" control={<Radio color="primary" />} label="not specified"/>
                    </RadioGroup>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <FormPasswordField id="RegisterFormPasswordTextField" label = "password" />
                        </Grid>
                        <Grid item xs={6}>
                            <FormPasswordField id="RegisterFormRepeatPasswordTextField" label = "repeat password" />
                        </Grid>
                    </Grid>
                    <FormTextField id="RegisterFormCityTextField" label = "city" />                    
                    <MulitlineFormTextField rows="4" id="MulitlineFormTextField" label = "write something about You" />
                    <RegisterButton style={{marginTop: "1.5em"}} href="/home"/>
                </form>
            </div>
        </div>
    )
}

export {RegisterPage}