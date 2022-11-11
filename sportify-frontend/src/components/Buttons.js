
import { Button, IconButton } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const RegisterButton = ({style, href}) =>{
    console.log(href)
    return (
        <Button component={RouterLink} to= {href}
        style={{...style,
            borderRadius: 2,
            backgroundColor: "#758BFD",
            padding: "18px 36px",
            fontSize: "1.2em",
            fontWeight: "bold",
            color: "white",
            minWidth: '21em', 
            minHeight: '3em'}} variant="contained" >Register</Button>
    )
}

const RoundedIconButton = ({id ,Icon}) => {
    return (
        <div>
        <IconButton  variant="contained"  {...{
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

export {RegisterButton, RoundedIconButton}