import './App.css';
import {Route, Routes, useParams} from 'react-router-dom'
import { createContext } from 'react';
import  {useState} from "react";
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { Activities } from "./pages/Activities";
import { Notifications } from "./pages/Notifications";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { Home } from "./pages/Home";
import {Activity} from './pages/Activity'
import {EditActivity} from './pages/EditActivity'

export const userContext = createContext();


function Announcement() {
  const params = useParams();

  return <Activity />;
}

function App() {
  
  const[user,setUser] = useState({

    id : "",

    email :"",

    phoneNumber :"",

    firstName : "",

    lastName :"",

    city : "",

    typeOfAccount:"",

    image : null

})
  return (
    <userContext.Provider value={{user, setUser}}>
      <Routes>
          <Route path="/"  element={<LoginPage />}/>
          <Route path="/register"  element={<RegisterPage />}/>
          <Route path="/home"  element={<Home />}/>
          <Route path="/activites"  element={<Activities />}/>
          <Route path="/notifications"  element={<Notifications />}/>
          <Route path="/profile"  element={<Profile />}/>
          <Route path="/settings"  element={<Settings />}/>
          <Route path="/activity/:id" element={<Announcement />} />
          <Route path="/activity/:id/edit" element={<EditActivity />} />
      </Routes>
    </userContext.Provider>
  )
}



export default App;
