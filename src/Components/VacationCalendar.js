import React, { useState, useEffect } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { WiDaySunny } from 'weather-icons-react';

  // API Key from https://rapidapi.com/community/api/open-weather-map/
  const API_KEY = 'b288f1ae8dmshb2230bda90da38bp154b42jsneff76a56ba64';

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
      justifyContent: 'flex-start',
      textAlign: 'right',
      color: theme.palette.text.secondary,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
    weather: {
      padding: theme.spacing(1),
      height: '35px',
      justifyContent: 'flex-start',
      color: theme.palette.text.secondary,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
    },
  }));
  // !! This function will replace the icon placeholders below in the FormRow component  

  function VacationCalendar() {
    const classes = useStyles();

    const [forecastArray, setForecastArray] = useState([])

    useEffect(() => {
      fetch("https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=honolulu&cnt=7&units=imperial&mode=JSON", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
      })
      .then(response => response.json())
      .then(data => setForecastArray(data.list))
    },[])

    // const weatherIcon = () => {
    //   const conditions = daily.weather[0].main.toLowerCase()
    //   if (conditions.includes("clear")) {
    //     return <WiDaySunny size={30} color='#000' />
    //   } else if (conditions.includes("rain")) {
    //     <WiRain size={30} color='#000' />
    //   } else if (conditions.includes("cloud")) {
    //     <WiCloud size={30} color='#000' />
    //   } else if (conditions.includes("lightning")) {
    //     <WiLightning size={30} color='#000' />
      // } 

    // const weatherIcon = () => {
    //   forecastArray.map(daily => {
        
    //     return (
          
    //     )
    //   })
    // }

    function HeaderRow() {
      return (
        <React.Fragment>
          <Grid item xs={2}>
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
        <>
          <React.Fragment>
            <Grid item xs={2}>
            </Grid>
            {forecastArray.map(daily => {
              const conditions = daily.weather[0].icon
              return (
                <Grid item xs={1} key={daily.dt}>
                  <Paper className={classes.date}>{new Date(daily.dt * 1000).getDate()}</Paper>
                  <Paper className={classes.weather}>
                    <div className="weather-elements">
                      <span className="temp-number">{Math.round(daily.temp.day)}°</span>
                      <img src={`http://openweathermap.org/img/wn/${conditions}@2x.png`} alt="weather-icon" className="weather-icon"/>
                    </div>
                  </Paper>
                </Grid>
              )}
            )}
            <Grid item xs={1}>
            </Grid>
          </React.Fragment>
        </>
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