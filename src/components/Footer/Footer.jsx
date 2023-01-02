import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <footer className="footer__section">
            <div className="footer__section-title">
              <img src="/images/Logo.svg" alt="logo" />
              <h1>Get Started Now</h1>
              <p>Setup is easy and takes under 5 minutes.</p>
              <Link to={"/#"}>Get Started Now</Link>
              <div className="footer__section-title_smallTxt">
                <span className="pulse"></span>
                <p>
                  <span>1000+</span> creators have already started
                </p>
              </div>
            </div>
            <div className="footer__section-navigation">
              <div className="footer__section-navigation_logos">
                <div className="footer__section-navigation_logo">
                  <Link to={"/"}>
                    <img src="/images/Logo.svg" alt="logo" />
                  </Link>
                  <Link to={"/"}>Marico</Link>
                </div>
                <div className="footer__section-navigation_email">
                  <p>info@marico.co</p>
                </div>
              </div>
              <div className="footer__section-navigation_links">
                <ul className="footer__section-navigation_link">
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
            </div>
          </footer>
        </div>
      </footer>
    </>
  );
};

export default Footer;
