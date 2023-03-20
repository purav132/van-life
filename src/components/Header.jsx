import React from "react";
import { Link, NavLink } from "react-router-dom";
import profilePic from "../assets/images/user-placeholder.png";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <NavLink to="." className="title">
        #VANLIFE
      </NavLink>
      <nav>
        <NavLink
          to="host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <Link to="login">
          <img src={profilePic} alt="profile-pic" />
        </Link>
        <button onClick={fakeLogOut}>x</button>
      </nav>
    </header>
  );
}
