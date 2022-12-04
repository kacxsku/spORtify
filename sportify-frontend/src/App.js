import './App.css';
import {Navigate, Route, Routes, useParams} from 'react-router-dom'
import { createContext } from 'react';
import  {useState, useEffect} from "react";
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { Activities } from "./pages/Activities";
import { Notifications } from "./pages/Notifications";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { Home } from "./pages/Home";
import {Activity} from './pages/Activity'
import {EditActivity} from './pages/EditActivity'
import {Chat} from './pages/messages'
import { UserContextProvider } from "./context/userContext";


const userid = 

function Announcement() {

  const params = useParams();

  return <Activity />;
}

function App() {

  return (
    <UserContextProvider>
      <Routes>
          <Route path="/"  element={<LoginPage />}/>
          <Route path="/register"  element={<RegisterPage />}/>
          <Route path="/home"  element={<Home />}/>
          <Route path="/activites"  element={<Activities />}/>
          <Route path="/notifications"  element={<Notifications />}/>
          <Route path="/profile"  element={<Profile />}/>
          <Route path="/settings"  element={<Settings />}/>
          <Route path="/activity/:userId" element={<Activity />} />
          <Route path="/activity/:userId/edit" element={<EditActivity />} />
          <Route path="/chat/:userId" element={<Chat />} />
      </Routes>
    </UserContextProvider>
  )
}



export default App;
