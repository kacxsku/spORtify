import React, {useState} from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers';
import '../styles/common.css'


const Calendar = () => {

    const [date, setDate] = useState(dayjs(new Date()));
    const [time, setTime] = useState(dayjs(new Date()));

    const handleDateChange = (newValue) => {
        setDate(newValue);
      };

      const handleTimeChange = (newValue) => {
        setTime(newValue);
      };


    return (
        <div className="DateTime">
            <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label="Enter date"
                    inputFormat="DD/MM/YYYY"
                    value={date.format("YYYY-MM-DD")}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField  sx={{width: "10em", height: "4em", size: "small",  marginRight: "1em"}} {...params} />}
                />
                        </LocalizationProvider>
                        <LocalizationProvider  dateAdapter={AdapterDayjs}>

                <TimePicker
                    label="Enter time"
                    inputFormat="hh:mm"
                    ampm={false}
                    value={time.format("L LT")}
                    onChange={handleTimeChange}
                    renderInput={(params) => <TextField sx={{width: "7em", height: "4em", size: "small",  marginRight: "1em"}} {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}

export {Calendar};