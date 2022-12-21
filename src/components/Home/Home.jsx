import React from "react";
import { Link } from "react-router-dom";
import Why from "../WhyLove/Why";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <header className="home">
        <div className="container">
          <div className="home__section">
            <div className="home__section-header_text">
              <h1 className="header_txt">Own your audience.</h1>
              <h1 className="header_txt gradient-txt">
                So you don't lose them.
              </h1>
            </div>
            <div className="home__section-buttons">
              <h3 className="home__section-buttons_txt">
                Turn your audience into email and <br />
                text message subscribers.
              </h3>
              <div className="home__section-buttons_btn">
                <Link className="get__started-btn">Get Started Now</Link>
                <Link className="view__demo-btn">View A Demo</Link>
              </div>
              <div className="home__section-buttons_smallTxt">
                <span className="pulse"></span>
                <p>
                  <span>1000+</span> creators have already started
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Why/>
    </>
  );
};

export default Home;
