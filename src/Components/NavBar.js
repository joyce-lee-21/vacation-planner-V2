import React from "react";
import {NavLink} from "react-router-dom"

export default function NavBar({ onChangePage }) {
  function handleLinkClick(e) {
    e.preventDefault();
    onChangePage(e.target.pathname);
  }

  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
            <NavLink to="/MyInfo">My Info</NavLink>
            <NavLink to="/VacationDetails">VacationDetails</NavLink>
            <NavLink to="/VacationCalendar">VacationCalendar</NavLink>
            <NavLink to="/WeatherDetails">WeatherDetails</NavLink>
    </nav>
  );
}
