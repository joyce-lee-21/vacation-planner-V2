import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import "./App.css";
import MyInfo from "./MyInfo";
import VacationDetails from "./VacationDetails";
import VacationCalendar from "./VacationDetails";
import WeatherDetails from "./VacationDetails";
import Home from "./Home";
import Header from "./Header";

function App() {
  const [page, setPage] = useState("/");
  return (
    // Should these routes be kebab-case?
    <div className="App">
      <Header></Header>
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route path="/MyInfo">
          <MyInfo />
        </Route>
        <Route path="/VacationDetails">
          <VacationDetails />
        </Route>
        <Route path="/VacationCalendar">
          <VacationCalendar />
        </Route>
        <Route path="/WeatherDetails">
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
  );
}

export default App;
