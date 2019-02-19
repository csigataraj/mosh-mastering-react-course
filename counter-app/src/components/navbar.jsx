import React from "react";

export const NavBar = ({ totalCounters }) => (
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Navbar{" "}
      <span className="badge bagde-pill badge-secondary">{totalCounters}</span>
    </a>
  </nav>
);
