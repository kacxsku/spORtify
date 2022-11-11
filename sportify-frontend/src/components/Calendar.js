import React, {useState} from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

const Calendar = () => {

    const [value, setValue] = useState(dayjs(new Date()));

    const handleChange = (newValue) => {
        setValue(newValue);
      };

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                label="Enter date"
                inputFormat="DD/MM/YYYY"
                value={value.format("YYYY-MM-DD")}
                onChange={handleChange}
                renderInput={(params) => <TextField  sx={{width: "10em", height: "4em", size: "small",  marginRight: "1em"}} {...params} 
                />}
                />
            </LocalizationProvider>
        </div>
    )
}

export {Calendar};