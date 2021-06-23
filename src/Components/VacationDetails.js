import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function VacationDetail() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-06-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const classes = useStyles();
  
  function StartDateRow() {
    return (
      <React.Fragment>
        <Grid item xs={5}>
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around" item xs={3}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Start Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid item xs={3}>
        </Grid>
      </React.Fragment>
    );
  } 
  function EndDateRow() {
    return (
      <React.Fragment>
        <Grid item xs={5}>
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around" item xs={3}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="End Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid item xs={3}>
        </Grid>
      </React.Fragment>
    );
  } 
  function VacationCityRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={1}>
          <span>Vacation City:</span>
        </Grid>
        <Grid item xs={3}>
          <input type="text" name="vacation-city" size="40"/>
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </React.Fragment>
    );
  } 

  return (
    <div className="vacation-details-container">
      <h2>Enter Vacation Details</h2>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={0}>
            <StartDateRow />
          </Grid>
          <Grid container item xs={12} spacing={0}>
            <EndDateRow />
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <VacationCityRow />
          </Grid>
          <Grid container item xs={12} spacing={0}>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="secondary">
                Check Weather
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
    );
}
