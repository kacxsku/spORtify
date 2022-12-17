import React, {useState} from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers';
import '../styles/common.css'


const Calendar = ({setFormDate, setFormTime}) => {

    const [date, setDate] = useState(dayjs(new Date()));
    const [time, setTime] = useState(dayjs(new Date()));

    const handleDateChange = (newValue) => {
        console.log(newValue);
        var dateField = new Date(newValue)
        setDate(newValue);
        const month = dateField.getMonth()+1;
        console.log(month);
        var finalDate =  dateField.getFullYear() + "-" +   month+ '-' + dateField.getDate();
        setFormDate(finalDate);
      };

      const handleTimeChange = (newValue) => {
        console.log(newValue)

        setTime(newValue);
        var time = new Date(newValue)
        var hour = time.getHours();
        var minutes = time.getMinutes();
        var finalTime = (hour<10?'0':'') + hour + ':' + (minutes<10?'0':'') + minutes
        setFormTime(finalTime);
      };
        
    return (
        <div className="DateTime">
            <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    id= "DatePicker"
                    label="Enter date"
                    inputFormat="DD/MM/YYYY"
                    value={date.format("YYYY-MM-DD")}
                    onChange={(x, event) => handleDateChange(x, event)}
                    renderInput={(params) => <TextField  sx={{width: "10em", height: "3em", size: "small",  marginRight: "1em"}} {...params} />}
                />
            </LocalizationProvider>
            <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <TimePicker
                clearable
                    label="Enter time"
                    ampm={false}
                    openTo="hours"
                    views={['hours', 'minutes']}
                    inputFormat="HH:mm"
                    mask="__:__"
                    value={time.format("L LT")}
                    onChange={(x, event) => handleTimeChange(x,event)}
                    renderInput={(params) => <TextField sx={{width: "10em",  size: "small",  marginRight: "1em", marginTop: "1em"}
                } {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}

export {Calendar};