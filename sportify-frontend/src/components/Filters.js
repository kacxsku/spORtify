import React, {useState, useEffect} from "react";
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
import { IconButton } from "@material-ui/core";


const ActivititesFilters = ({setFilter}) => {
    const [disable, setDisable] = useState(false);

    const handleClick = (id) => {
        setFilter(id);
        setDisable(true);
    }

    const FilterIconButton = ({id ,Icon}) => {
        return (
            <div>
            <IconButton  variant="contained"  
            disabled={disable} 
            onClick={() => handleClick(id)}
            {...{
                id: id,
                size: "medium",
                color: "inherit"
                } } 
                >
                <Icon fontSize="medium"/>
            </IconButton>
            </div>
        )
    }

    return (
        <Stack direction="column" spacing={1}>
            <FilterIconButton id="jogging" Icon={DirectionsRunIcon}/>
            <FilterIconButton id="cycling" Icon={DirectionsBikeIcon}/>
            <FilterIconButton id="swimming" Icon={PoolIcon}/>
            <FilterIconButton id="fitness" Icon={FitnessCenterIcon}/>
            <FilterIconButton id="gym" Icon={SportsGymnasticsIcon}/>
            <FilterIconButton id="soccer" Icon={SportsSoccerIcon}/>
            <FilterIconButton id="Tenis" Icon={SportsTennisIcon}/>
            <FilterIconButton id="mma" Icon={SportsMmaIcon}/>
            <FilterIconButton id="otherSports" Icon={QuestionMarkIcon}/>
        </Stack>
    )
}

export {ActivititesFilters};
