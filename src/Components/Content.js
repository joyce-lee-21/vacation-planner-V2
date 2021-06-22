import React from "react";
import MyInfo from "./MyInfo";
import VacationDetails from "./VacationDetails";
import VacationCalendar from "./VacationCalendar";
import WeatherDetails from "./WeatherDetails";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

export default function Content() {
    return (
        <div>
            <Switch>
                <Route path="/myinfo/:id">
                    <MyInfo />
                </Route>
                <Route path="/vacationdetails/:userId/:id">
                    <VacationDetails />
                </Route>
                <Route path="/vacationcalendar/">
                    <VacationCalendar />
                </Route>
                <Route path="/weather/:userId/:id">
                    <WeatherDetails />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </div>
    )
}
