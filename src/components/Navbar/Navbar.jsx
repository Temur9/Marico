import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <nav className="navbar__section">
            <div className="navbar__section-logo">
              <Link to={"/"}>
                <img src="/images/Logo.svg" alt="Marico logo" />
                Marico
              </Link>
            </div>
            <div className="navbar__section-links">
              <ul>
                <li>
                  <NavLink to={"/k"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/s"}>Pricing</NavLink>
                </li>
                <li>
                  <NavLink to={"/a"}>Blog</NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar__section-signup">
              <Link className="login" to="/#">Login</Link>
              <Link className="signup" to="/#">Sign Up</Link>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
