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
import announcementsService from "./service/announcementsService";
import {timer, sendEmail, sendPush} from "./notifications/sendNotification"


function Announcement() {

  const params = useParams();

  return <Activity />;
}

function App() {
  const[activities, setActivities] = useState([])

  useEffect(() => {
    announcementsService.getAllAnnouncements()
    .then(announcements => {
        setActivities(announcements);
        localStorage.setItem("announcements", JSON.stringify(announcements));
        console.log("get all announcement operation for notificationssuccessfully finish", announcements);
    }).catch(error => {
        console.log("unable to get all announcements",error)
    })
  },[])

  setInterval(() => {
    console.log("setIner", activities)
    activities.forEach(function(activity) {
        console.log(activity);
        var time = timer("2022-12-09 18:24");
        const activityDate = activity.date
        console.log("meeting", activityDate);
        console.log(time);
        if(time){
            sendEmail(activity.participant);
            console.log("email sended");
        }
    })
  }, 30000) 

  return (
    <UserContextProvider>
      <Routes>
          <Route path="/"  element={<LoginPage />}/>
          <Route path="/register"  element={<RegisterPage />}/>
          <Route path="/home"  element={<Home />}/>
          <Route path="/activities"  element={<Activities />}/>
          <Route path="/notifications"  element={<Notifications />}/>
          <Route path="/profile"  element={<Profile />}/>
          <Route path="/settings"  element={<Settings />}/>
          <Route path="/activity/:userId/edit" element={<EditActivity />} />
          <Route path="/chat/:userId" element={<Chat />} />
          <Route path="home/activity/:announcementId" element={<Activity />} />
          <Route path="profile/activity/:announcementId" element={<Activity />} />
          <Route path="activities/activity/:announcementId" element={<Activity />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App;
