import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
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
              <Link className="login" to="/#">
                Login
              </Link>
              <Link className="signup" to="/#">
                Sign Up
              </Link>
              <div className="navbar__section-smallscreen">
                <button onClick={() => setToggleMenu(true)}>
                  <i class="fa-solid fa-bars"></i>
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