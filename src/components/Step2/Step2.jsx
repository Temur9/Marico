import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import "./Step2.scss";

const Step2 = () => {
  return (
    <>
      <div className="step2">
        <div className="container">
          <div className="step2__section">
            <Zoom><div className="step2__section-header_titles">
              <h6>Step 2</h6>
              <h1>Share Your Homepage</h1>
              <p>
                Share your Wavium homepage link with your followers, and <br />{" "}
                we'll handle the rest.
              </p>
            </div></Zoom>
            <div className="step2__section-main_info">
              <Fade left><div className="step2__section-main_info-left">
                <h6>One Link</h6>
                <h1>
                  ALL You Create. <br /> <span>One Link</span>
                </h1>
                <img src="/images/Mobile.png" alt="mobile" />
              </div></Fade>
              <Fade right><div className="step2__section-main_info-right">
                <h6>Collect Subscribers</h6>
                <h1>
                  Emails. <br /> Phone #s. <br /> <span>All Yours.</span>
                </h1>
              </div></Fade>
            </div>
            <div className="step2__section-button">
              <Link to={"/#"}>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
