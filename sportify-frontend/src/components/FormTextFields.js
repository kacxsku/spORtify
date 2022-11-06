import { TextField } from "@material-ui/core";


const FormTextField = ({...props}) => {
    return (
        <TextField
        required
        
        {...{
        id: props.id,
        label: props.label,
        placeholder: props.placeholder
        }}
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
        rows={4}
        {...{
        id: props.id,
        label: props.label,
        placeholder: props.placeholder
        }}
        style={{
            marginTop: "0.3em",
            padding: "0.4em"
        }}
        />
    )

}

export {FormTextField, FormPasswordField, MulitlineFormTextField}
