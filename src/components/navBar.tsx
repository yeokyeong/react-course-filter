import React from "react";
import "./navBar.scss";
import logoImg from "../assets/logo.svg";
export const NavBar: React.FC = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar--wrapper">
        <img src={logoImg} alt="logo" />
      </div>
    </div>
  );
};
