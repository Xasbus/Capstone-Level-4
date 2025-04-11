import React from "react";
import { NavLink } from "react-router";

export function NavBar() {
  const domain = window.location.hostname;
  let rootPath = "";
  if (domain === "xasbus.github.io") rootPath = "/Capstone-Lvl-3";
  return (
    <>
      <nav className="nav nav-pills">
        <img
          title="PS Logo"
          alt="logo"
          width="40px"
          src="data:image/png;base64,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"
        />
        <NavLink className="nav-link" to={`${rootPath}/`}>
          Home
        </NavLink>
        <NavLink className="nav-link" to={`${rootPath}/consoles`}>
          Consoles
        </NavLink>
        <NavLink className="nav-link" to={`${rootPath}/games`}>
          Games
        </NavLink>
        <NavLink className="nav-link" to={`${rootPath}/accessories`}>
          Accessories
        </NavLink>
        <NavLink className="nav-link" to={`${rootPath}/signin`}>
          Sign In
        </NavLink>
        <NavLink className="nav-link" to={`${rootPath}/about`}>
          About
        </NavLink>
        <NavLink className="nav-link" to={`${rootPath}/contact`}>
          Contact
        </NavLink>
      </nav>
    </>
  );
}
