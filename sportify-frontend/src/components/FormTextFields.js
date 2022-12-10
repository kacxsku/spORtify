import { TextField } from "@material-ui/core";
import React, {useState, useRef, forwardRef, useContext} from "react";


const FormTextField = ({id, label, placeholder, setValue}) => {
    const [input, setInput] = useState();

    return (
        <TextField
        required
        id={id}
        label={label}
        placeholde= {placeholder}
        onChange={setInput}
        style={{
            marginTop: "0.3em",
            padding: "0.4em"
        }}
        />
    )
}

const FormPasswordField = ({...props}) => {
    return (
        <TextField
        required
        {...{
            id: props.id,
            label: props.label,
            type: "password",
            autoComplete: "password"
        }}
        style={{
            marginTop: "0.3em",
            padding: "0.4em"
        }}
    />
    )
}

const MulitlineFormTextField = ({...props}) => {
    return (
        <TextField
        required
        multiline
        {...{
        minRows: props.rows,
        id: props.id,
        label: props.label,
        placeholder: props.placeholder,
        style: {
            marginTop: "0.3em",
            padding: "0.4em", 
        }
        }}
        />
    )

}

export {FormTextField, FormPasswordField, MulitlineFormTextField}
