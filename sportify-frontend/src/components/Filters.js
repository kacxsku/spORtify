import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PoolIcon from '@mui/icons-material/Pool';
import Stack from '@mui/material/Stack';
import { RoundedIconButton } from '../components/Buttons';

const ActivititesFilters = () => {
    return (
        <Stack direction="column" spacing={1}>
            <RoundedIconButton id="jogginButton" Icon={DirectionsRunIcon}/>
            <RoundedIconButton id="cyclingButton" Icon={DirectionsBikeIcon}/>
            <RoundedIconButton id="swimmingButton" Icon={PoolIcon}/>
            <RoundedIconButton id="fitnessButton" Icon={FitnessCenterIcon}/>
            <RoundedIconButton id="gymButtom" Icon={SportsGymnasticsIcon}/>
            <RoundedIconButton id="soccerButton" Icon={SportsSoccerIcon}/>
            <RoundedIconButton id="TenisButton" Icon={SportsTennisIcon}/>
            <RoundedIconButton id="mmaButton" Icon={SportsMmaIcon}/>
            <RoundedIconButton id="otherSportButton" Icon={QuestionMarkIcon}/>
        </Stack>
    )
}

export {ActivititesFilters};
