import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const DatePicker = ({ startDate, endDate }) => {
  const [selectedStartDate, setStartDate] = React.useState(new Date());
  const [selectedEndDate, setEndDate] = React.useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
    startDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
    endDate(date);
  };

  return (
    <>
      <div className="date-picker-container margin0">
        <div >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container>
              <KeyboardDatePicker
              
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                className="date-picker-inline"
                label="Début"
                minDate={new Date()}
                value={selectedStartDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>

        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid  container>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                className="date-picker-inline"
                label="Fin"
                minDate={selectedStartDate}
                value={selectedEndDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
