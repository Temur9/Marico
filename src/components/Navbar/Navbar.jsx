import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <>
      <nav className="navbar sticky">
        <div className="container">
          <nav className="navbar__section">
            <div className="navbar__section-logo">
              <Link to={"/"}>
                <img src="/images/Logo.svg" alt="Marico logo" />
              </Link>
              <Link className="txtLink" to={"/"}>
                Marico
              </Link>
            </div>
            <div className="navbar__section-navigation">
              <ul className="navbar__section-links">
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/pricing"}>Pricing</NavLink>
                </li>
                <li>
                  <NavLink to={"/blog"}>Blog</NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar__section-signup">
              <Link className="login" to="/logIn">
                Login
              </Link>
              <Link className="signup" to="/signUp">
                Sign Up
              </Link>
              <div className="navbar__section-smallscreen">
                <button onClick={() => setToggleMenu(true)}>
                  <i className="fa-solid fa-bars"></i>
                </button>
                {toggleMenu && (
                  <div className="navbar__section-smallscreen_overlay slide-bottom">
                    <button
                      className="overlay__close"
                      onClick={() => setToggleMenu(false)}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                    <ul className="navbar__section-smallscreen_links">
                      <li>
                        <NavLink
                          to={"/about"}
                          onClick={() => setToggleMenu(false)}>
                          About
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/pricing"}
                          onClick={() => setToggleMenu(false)}>
                          Pricing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/blog"}
                          onClick={() => setToggleMenu(false)}>
                          Blog
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
