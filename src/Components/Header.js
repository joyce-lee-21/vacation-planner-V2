import React from "react";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div className="header-main">
      <Link exact to="/" style={{color: 'inherit', textDecoration: 'none'}}>
        <h1>Vacation Planner</h1>
      </Link>
    </div>
  );
}
