import React from "react";
import "./nav.scss";
import { Link, NavLink } from "react-router-dom";
import sun from "../../images/sun.svg";
import moon from "../../images/moon.svg";
const Nav = ({ theme, handleTogle }) => {
  return (
    <div className="nav_container">
      <div className="nav_links">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/portfolio"
        >
          Portfolio
        </NavLink>
      </div>
      <div className="theme_btn" onClick={handleTogle}>
        <img src={sun} alt="" className={`${theme == "dark" && "w_0"}`} />
        <img src={moon} alt="" className={`${theme !== "dark" && "w_0"}`} />
      </div>
    </div>
  );
};

export default Nav;
