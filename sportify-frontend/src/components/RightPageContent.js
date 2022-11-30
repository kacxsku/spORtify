import {AddActivityModal} from '../components/AddActivity'
import Card from '@mui/joy/Card';
import Typography from '@mui/material/Typography';
import '../styles/common.css'
import avatar from '../assets/avatar.png' 

const RightPageContent = () =>{
    return(
            <div className="RightPageContent">
                <Card variant="outlined" sx={{
                    border: 1,
                    borderColor: "#605D5D"
                }}>
                    <div className="CardData">
                        <div className="UserData">
                            <img className="avatar" src={avatar} alt="Avatar"/>
                            <Typography> Jan kowalski </Typography>
                        </div>
                        <div className="AdditionalData" >
                            <a href='https://www.spotify.com/' target="_blank" rel='noreferrer'>Spotify</a>
                            <a href='https://www.kartamultisport.pl/' target="_blank" rel='noreferrer'>Multisport</a>
                        </div>
                    </div>
                </Card>
               <AddActivityModal />
            </div>
    )
}

export {RightPageContent};