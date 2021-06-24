import React, { useState } from "react";
import MyInfo from "./MyInfo";
import VacationDetails from "./VacationDetails";
import VacationCalendar from "./VacationCalendar";
import WeatherDetails from "./WeatherDetails";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

export default function Content({
  currentUser,
  allVacations,
  page,
  onLoginSubmit,
  onForgotPasswordSubmit,
  onIsUserNameAvailable,
  onAddUser,
  onLogout
}) {
  const [selectedStartDate, setSelectedStartDate] = React.useState(
    new Date("2021-06-18T21:11:54")
  );
  const [selectedEndDate, setSelectedEndDate] = React.useState(
    new Date("2021-06-19T21:11:54")
  );
  const [newVacation, setNewVacation] = useState("new york");
  const [weatherDate, setWeatherDate] = useState("");

  const onSelectedStartDate = (date) => {
    let startDate = date;
    let convertedStartDate = new Date(startDate);
    let month = convertedStartDate.getMonth() + 1;
    let day = convertedStartDate.getDate();
    let year = convertedStartDate.getFullYear();
    let shortStartDate = month + "/" + day + "/" + year;
    setSelectedStartDate(shortStartDate);
  };
  const onSelectedEndDate = (date) => {
    let endDate = date;
    let convertedEndDate = new Date(endDate);
    let month = convertedEndDate.getMonth() + 1;
    let day = convertedEndDate.getDate();
    let year = convertedEndDate.getFullYear();
    let shortEndDate = month + "/" + day + "/" + year;
    setSelectedEndDate(shortEndDate);
  };
  const onNewVacation = (city) => {
    setNewVacation(city);
  };

  const vacationData = {
    start: selectedStartDate,
    end: selectedEndDate,
    city: newVacation
  };

  const handleVacationSubmit = () => {
    setNewVacation(vacationData);
  };

  const onWeatherClick = (date) => {
    let convertedWeatherDate = new Date(date * 1000);
    let month = convertedWeatherDate.getMonth() + 1;
    let day = convertedWeatherDate.getDate();
    let year = convertedWeatherDate.getFullYear();
    let shortWeatherDate = month + "/" + day + "/" + year;
    setWeatherDate(shortWeatherDate);
  };

  return (
    <div>
      <Switch>
        <Route path="/myinfo/">
          <MyInfo
            currentUser={currentUser}
            page={page}
            allVacations={allVacations}
          />
        </Route>
        <Route path="/vacationdetails/">
          <VacationDetails
            currentUser={currentUser}
            page={page}
            onSelectedStartDate={onSelectedStartDate}
            onSelectedEndDate={onSelectedEndDate}
            onNewVacation={onNewVacation}
            onVacationSubmit={handleVacationSubmit}
          />
        </Route>
        <Route path="/vacationcalendar/">
          <VacationCalendar
            currentUser={currentUser}
            page={page}
            onWeatherClick={onWeatherClick}
            vacationData={vacationData}
          />
          {weatherDate && (
            <WeatherDetails
              currentUser={currentUser}
              page={page}
              weatherDate={weatherDate}
            />
          )}
        </Route>
        <Route exact path="/">
          <Home
            currentUser={currentUser}
            page={page}
            onLoginSubmit={onLoginSubmit}
            onForgotPasswordSubmit={onForgotPasswordSubmit}
            onIsUserNameAvailable={onIsUserNameAvailable}
            onAddUser={onAddUser}
            onLogout={onLogout}
          />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}
