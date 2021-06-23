import React from "react";
import {NavLink} from "react-router-dom"

export default function NavBar({ onChangePage }) {
  function handleLinkClick(e) {
    e.preventDefault();
    onChangePage(e.target.pathname);
  }

  return (
    <div className="navbar-main">
      <NavLink exact to="/">
        <button className="nav-button">Home</button>
      </NavLink>
      <NavLink to="/myinfo">
        <button className="nav-button">My Info</button>
      </NavLink>
      <NavLink to="/vacationdetails">
        <button className="nav-button">Vacation Details</button>
      </NavLink>
      <NavLink to="/vacationcalendar">
        <button className="nav-button">Vacation Calendar</button>
      </NavLink>
      <NavLink to="/weather">
        <button className="nav-button">Weather Details</button>
      </NavLink>
    </div>
  );
}
