import React, {useState, useEffect} from "react";
import '../styles/LoginPage.css'
import '../styles/common.css'
import {AppHeader} from '../components/Header'
import {RegisterButton} from '../components/Buttons'
import announcementsService from "../service/announcementsService";


const LoginPage = () => {
    return (  
        <div className="Page">
            <AppHeader />
            <div className="PageContent">
                <div className="PageCenter">
                        <p className="PageContent1">For</p>
                        <p className="PageContent2">Your</p>
                        <p className="PageContent3">Convenience</p>
                        <p className="PageContent4">Form bounds by practising sport</p>
                        <RegisterButton href={"/register"}/>
                </div>
                <img className="eye-catcher" src="images/loginPageImage.svg" alt="eye-catcher"/>
            </div>
        </div>
    )
}

export {LoginPage}