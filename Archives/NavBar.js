import React from "react";
import { Link } from "react-router";

export function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">Home | </Link>
        <Link to="/consoles">Consoles |</Link>
        <Link to="/games">Games | </Link>
        <Link to="/accessories">Accessories | </Link>
        <Link to="/signin">Sign In | </Link>
        <Link to="/about">About | </Link>
        <Link to="/contact">Contact | </Link>
      </nav>
    </>
  );
}
