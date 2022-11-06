
import { Button } from "@material-ui/core";
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

export {RegisterButton}