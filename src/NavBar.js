import React from "react";

export default function NavBar({ onChangePage }) {
  function handleLinkClick(e) {
    e.preventDefault();
    onChangePage(e.target.pathname);
  }

  return (
    <nav>
      <a onClick={handleLinkClick} href="/">
        Home
      </a>
      <a onClick={handleLinkClick} href="/MyInfo">
        My Info
      </a>
      <a onClick={handleLinkClick} href="/VacationDetails">
        Vacation Details
      </a>
      <a onClick={handleLinkClick} href="/VacationCalendar">
        Vacation Calendar
      </a>
      <a onClick={handleLinkClick} href="/WeatherDetails">
        Weather Details
      </a>
    </nav>
  );
}
