import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { WiDaySunny } from 'weather-icons-react';

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    date: {
      padding: theme.spacing(1),
      height: '100px',
      justifyContent: 'flex-end',
      textAlign: 'right',
      color: theme.palette.text.secondary,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
    weather: {
      padding: theme.spacing(1),
      height: '30px',
      bottom: 0,
      color: theme.palette.text.secondary,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
    },
  }));

  function VacationCalendar() {
    const classes = useStyles();

    function HeaderRow() {
      return (
        <React.Fragment>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>Sun</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>Mon</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>Tues</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>Wed</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>Thurs</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>Fri</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>Sat</Paper>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </React.Fragment>
      );
    } 
// Below should be dynamic to data. Pass in temperature, code conditional to render weather icon. Weather icon optional?

    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.date}>20</Paper>
            <Paper className={classes.weather}>
              95
              <WiDaySunny size={30} color='#000' />
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.date}>21</Paper>
            <Paper className={classes.weather}>
              95
              <WiDaySunny size={30} color='#000' />
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.date}>22</Paper>
            <Paper className={classes.weather}>
              95
              <WiDaySunny size={30} color='#000' />
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.date}>23</Paper>
            <Paper className={classes.weather}>
              95
              <WiDaySunny size={30} color='#000' />
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.date}>24</Paper>
            <Paper className={classes.weather}>
              95
              <WiDaySunny size={30} color='#000' />
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.date}>25</Paper>
            <Paper className={classes.weather}>
              95
              <WiDaySunny size={30} color='#000' />
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.date}>26</Paper>
            <Paper className={classes.weather}>
              95
              <WiDaySunny size={30} color='#000' />
            </Paper>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </React.Fragment>
      );
    } 
  return (
    <div className="calendar-container">
      <h2>Vacation Calendar</h2>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={0}>
            <HeaderRow />
          </Grid>
          {/* For every 7 days, render the below code */}
          <Grid container item xs={12} spacing={0}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default VacationCalendar;