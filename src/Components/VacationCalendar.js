import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { addDays } from "date-fns";
import { first } from "lodash";

// API Key from https://rapidapi.com/community/api/open-weather-map/
const API_KEY = "0629feec2bmsh3ef7f3d86a812b3p127915jsna97cfce97a10";
const API_HOST = "community-open-weather-map.p.rapidapi.com";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  date: {
    padding: theme.spacing(1),
    height: "100px",
    justifyContent: "flex-start",
    textAlign: "right",
    color: theme.palette.text.secondary,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  weather: {
    padding: theme.spacing(1),
    height: "35px",
    justifyContent: "flex-start",
    color: theme.palette.text.secondary,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  }
}));
// !! This function will replace the icon placeholders below in the FormRow component

const DAYS_PER_WEEK = 7;
const SECONDS_PER_DAY = 86400;
const MONTHS = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

function VacationCalendar({ onWeatherClick }) {
  const classes = useStyles();

  const [forecastArray, setForecastArray] = useState([]);

  const [currentMonth, setCurrentMonth] = useState("");

  function leftPadWithEmptyObject(arr, seconds) {
    arr.unshift({ dt: seconds });
  }

  function buildForecastArray(forecast) {
    let firstDayOfWeek = new Date(forecast[0].dt * 1000).getDay();
    setCurrentMonth(new Date(forecast[0].dt * 1000).getMonth());
    let secondsInFirstDay = forecast[0].dt;
    console.log(firstDayOfWeek);
    while (firstDayOfWeek > 0) {
      secondsInFirstDay -= SECONDS_PER_DAY;
      leftPadWithEmptyObject(forecast, secondsInFirstDay);
      firstDayOfWeek--;
    }

    console.log(forecast);
    setForecastArray(forecast);
  }

  useEffect(() => {
    fetch(
      "https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=honolulu&cnt=10&units=imperial&mode=JSON",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST
        }
      }
    )
      .then((response) => response.json())
      .then((data) => buildForecastArray(data.list));
  }, []);

  function HeaderRow() {
    return (
      <React.Fragment>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper} id="dayWeekHeader0">
            Sun
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper} id="dayWeekHeader1">
            Mon
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper} id="dayWeekHeader2">
            Tues
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper} id="dayWeekHeader3">
            Wed
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper} id="dayWeekHeader4">
            Thurs
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper} id="dayWeekHeader5">
            Fri
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper} id="dayWeekHeader6">
            Sat
          </Paper>
        </Grid>
        <Grid item xs={1}></Grid>
      </React.Fragment>
    );
  }
  // Below should be dynamic to data. Pass in temperature, code conditional to render weather icon. Weather icon optional?
  function FormRow() {
    return (
      <>
        <React.Fragment>
          <Grid item xs={2}></Grid>
          {forecastArray.map((daily) => {
            const conditions = daily.weather && daily.weather[0].icon;
            const firstDay = forecastArray[0].dt;
            return (
              <>
                <Grid item xs={1} key={daily.dt}>
                  <Paper className={classes.date}>
                    {new Date(daily.dt * 1000).getDate()}
                  </Paper>
                  <Paper
                    className={classes.weather}
                    onClick={() => onWeatherClick(daily.dt)}
                  >
                    <div className="weather-elements">
                      <span className="temp-number">
                        {daily.temp
                          ? `${Math.round(daily.temp.day)}°`
                          : "no data"}
                      </span>
                      {conditions && (
                        <img
                          src={`http://openweathermap.org/img/wn/${conditions}@2x.png`}
                          alt="weather-icon"
                          className="weather-icon"
                        />
                      )}
                    </div>
                  </Paper>
                </Grid>{" "}
                {daily.dt ===
                  (DAYS_PER_WEEK - 1) * SECONDS_PER_DAY + firstDay && (
                  <Grid item xs={3}></Grid>
                )}
                {daily.dt ===
                  (DAYS_PER_WEEK - 1) * SECONDS_PER_DAY + firstDay && (
                  <Grid item xs={2}></Grid>
                )}
              </>
            );
          })}
          <Grid item xs={1}></Grid>
        </React.Fragment>
      </>
    );
  }
  return (
    <div className="calendar-container">
      <h2>Vacation Calendar</h2>
      <h3>{MONTHS[currentMonth]}</h3>
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
  );
}

export default VacationCalendar;
