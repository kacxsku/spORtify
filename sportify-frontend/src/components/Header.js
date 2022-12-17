import {React, useState} from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { Link as RouterLink } from "react-router-dom";
import '../styles/LoginPage.css'
import '../styles/common.css'
import { FormTextField, FormPasswordField } from "./FormTextFields";

const loginPageHeaders = [
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Help",
        href: "/help",
    },
    {
        label: "about spORtify",
        href: "/about",
    },
]

const AppHeader = () =>{
    const applicationLogo = (
        <Typography variant="h6" component="h1">
            spORtify
        </Typography>
    )
    const getLoginPageButtons = () => {
        return loginPageHeaders.map(({label, href}) => {
            return (
                <Button {... {
                    key: label,
                    to: href,
                    component: RouterLink,
                    color: "inherit",
                    className: "LoginPageButton"}}
            >{label}</Button>
            )
        })
    }

    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen((prev) => !prev);
      };
    
      const handleClickAway = () => {
        setOpen(false);
      };

      const checkAuthorization = () =>{
        
      }


      return (
        <ClickAwayListener onClickAway={handleClickAway}>
        <AppBar className="LoginPageHeader" style={{      backgroundColor: 'transparent', boxShadow: 'none',}}>
            <Toolbar className="LoginToolbar" style={{
                backgroundColor: "#758BFD"
                }}>
                {applicationLogo}
                <div className="LoginButtons">
                    {getLoginPageButtons()}
                </div>
                <p className="loginButton" onClick={handleClick} >Log In</p>
                </Toolbar>
                {open ? (
                    <form className="LoginForm">
                        <FormTextField id="LoginFormEmailTextField" label = "email" />
                        <FormPasswordField id="LoginFormPasswordTextField" label = "password" />
                        <p className="ForgetPassword">I forget password</p>
                        <Button component={RouterLink} to= "/home" 
                        onClick={checkAuthorization}
                        style={{
                            borderRadius: 2,
                            borderColor: "black",
                            border: 1
                        }}>Login</Button>
                    </form>
                ): null}
        </AppBar>
    </ClickAwayListener>
      )
}

export {AppHeader};