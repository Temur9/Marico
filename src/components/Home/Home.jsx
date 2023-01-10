import React from "react";
import { Link } from "react-router-dom";
import Experts from "../Experts/Experts";
import Footer from "../Footer/Footer";
import Help from "../Help/Help";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
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
                <Link to='/#' className="get__started-btn">Get Started Now</Link>
                <Link to='/#' className="view__demo-btn">View A Demo</Link>
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
      <Step1/>
      <Step2/>
      <Step3/>
      <Experts/>
      <Help/>
      <Footer/>
    </>
  );
};

export default Home;
