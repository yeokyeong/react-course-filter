import React from "react";
import "./navBar.scss";
import logoImg from "../assets/logo.svg";

export const NavBar: React.FC = () => {
  return (
    <div className="nav-bar--wrapper">
      <div className="nav-bar">
        <img src={logoImg} alt="logo" />
      </div>
    </div>
  );
};
