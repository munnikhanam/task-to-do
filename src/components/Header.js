import React from "react";
import logo from "../assets/logo (1).svg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} />

        <span>Task-to-do</span>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
  );
}

export default Header;
