import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { setDate } from 'date-fns/esm';

export default function MaterialUIPickers({setDate, setHour}) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate(date);
    // let fullDate= date.toString();
    // let res = fullDate.slice(0,16)
    // thisDate(res)
  };
  const handleHourChange = (date) => {
    setSelectedDate(date);
    setHour(date);
    // let fullDate= date.toString();
    // let res = fullDate.slice(16,fullDate.length)
    // console.log(res)
    // hour(res);
  };

  return (
    

    
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

<div className="date-picker-container">
      
      
        <KeyboardDatePicker
          // margin="normal"
         
          fullWidth
          margin="max"
          id="date-picker-dialog"
          label="Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
     

        
        <KeyboardTimePicker
          // margin="normal"
         
          id="time-picker"
          label="Heure"
          value={selectedDate}
          onChange={handleHourChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
       
    
      </div>
    </MuiPickersUtilsProvider>
    
  
  );
}