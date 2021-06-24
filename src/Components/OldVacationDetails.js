import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

export default function VacationDetails({
  onSelectedStartDate,
  onSelectedEndDate,
  onNewVacation,
  onVacationSubmit,
  currentUser
}) {
  const handleStartDateChange = (e) => {
    onSelectedStartDate(e);
  };

  const handleEndDateChange = (e) => {
    onSelectedEndDate(e);
  };

  const handleVacationInput = (e) => {
    onNewVacation(e.target.value);
  };

  const classes = useStyles();

  function StartDateRow() {
    return (
      <React.Fragment>
        <Grid item xs={5}></Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around" item xs={3}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="startdate-picker-inline"
              label="Start Date"
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid item xs={3}></Grid>
      </React.Fragment>
    );
  }
  function EndDateRow() {
    return (
      <React.Fragment>
        <Grid item xs={5}></Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around" item xs={3}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="enddate-picker-inline"
              label="End Date"
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid item xs={3}></Grid>
      </React.Fragment>
    );
  }
  function VacationCityRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}></Grid>
        <Grid item xs={1}>
          <span>Vacation City:</span>
        </Grid>
        <Grid item xs={3}>
          <input
            type="text"
            name="vacation-city"
            size="40"
            placeholder="City, State, Country"
            onChange={handleVacationInput}
          />
        </Grid>
        <Grid item xs={3}></Grid>
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
            <Grid item xs={5}></Grid>
            <Grid item xs={3}>
              <Link
                to="/vacationcalendar"
                style={{ textDecoration: "none" }}
                onClick={onVacationSubmit}
              >
                <Button variant="contained" color="secondary">
                  Check Weather
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
