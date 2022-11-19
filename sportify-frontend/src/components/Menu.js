import React, {useState} from "react";
import {SidebarLink} from '../components/SidebarLink'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SendIcon from '@mui/icons-material/Send';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Button} from "@material-ui/core";
import '../styles/menu.css'
import logo from '../assets/logo.png' 
import { Badge } from "@mui/material";


const Menu = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [invisible, setInvisible] = useState(false);

    function handlePageChange(pageUrl){
        navigate(pageUrl)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

    const handleClose = () => {
        setAnchorEl(null);
      };

      const handleBadgeVisibility = () => {
        setInvisible(!invisible);
      };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
            <ul className="menu">
                <li className="MenuUserData" onClick={() => handlePageChange("/profile")}>
                    <img src={logo} alt="Logo"/>
                </li>
                <li onClick={() => handlePageChange("/home")}>
                    <SidebarLink text="Home" Icon={HomeIcon}/>
                </li >
                <li onClick={() => handlePageChange("/notifications")}>
                    <Badge 
                    color="primary" 
                    variant="dot" 
                    invisible={invisible} 
                    onClick={handleBadgeVisibility}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    >
                        <SidebarLink text="Notifications" Icon={NotificationsIcon} />
                    </Badge>
                </li>
                <li onClick={() => handlePageChange("/activites")}>
                    <SidebarLink text="Activites" Icon={CalendarMonthIcon}  />
                </li>
                <li onClick={() => handlePageChange("/profile")}>
                    <SidebarLink text="Profile" Icon={AccountBoxIcon}  />
                </li>
                <li onClick={() => handlePageChange("/settings")}>
                    <SidebarLink text="Messages" Icon={SendIcon}/>
                </li>
                <li>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "center",
                            horizontal: 'center',
                        }}
                        PaperProps={{
                            style: { width: '12em' },
                          }}
                          >
                            <Typography sx={{ p: 1 }}>
                                <Button  startIcon={<LogoutIcon />} onClick={() => handlePageChange("/") } sx={{width: "10 em"}} >
                                    Logout
                                </Button>
                            </Typography>
                            <Typography sx={{ p: 1 }}>
                                <Button  startIcon={<SettingsApplicationsIcon />} onClick={() => handlePageChange("/settings")} sx={{width: "10em"}} >
                                    Settings
                                </Button>
                            </Typography>
                    </Popover>
                    <MenuIcon onClick={handleClick}/>
                </li>
            </ul> 
        )
}


export {Menu};