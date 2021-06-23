import React from "react";
import MyInfo from "./MyInfo";
import VacationDetails from "./VacationDetails";
import VacationCalendar from "./VacationCalendar";
import WeatherDetails from "./WeatherDetails";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

export default function Content({
  currentUser,
  page,
  onLoginSubmit,
  onForgotPasswordClick,
  onNewUserClick,
  onIsUserNameAvailable,
  onAddUser
}) {
  return (
    <div>
      <Switch>
        <Route path="/myinfo/">
          <MyInfo currentUser={currentUser} page={page} />
        </Route>
        <Route path="/vacationdetails/">
          <VacationDetails currentUser={currentUser} page={page} />
        </Route>
        <Route path="/vacationcalendar/">
          <VacationCalendar currentUser={currentUser} page={page} />
        </Route>
        <Route path="/weather/">
          <WeatherDetails currentUser={currentUser} page={page} />
        </Route>
        <Route exact path="/">
          <Home
            currentUser={currentUser}
            page={page}
            onLoginSubmit={onLoginSubmit}
            onForgotPasswordClick={onForgotPasswordClick}
            onNewUserClick={onNewUserClick}
            onIsUserNameAvailable={onIsUserNameAvailable}
            onAddUser={onAddUser}
          />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}
