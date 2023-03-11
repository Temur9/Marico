import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import "./Step1.scss";
const Step1 = () => {
  return (
    <>
      <div className="step1">
        <div className="container">
          <div className="step1__section">
            <Zoom>
              <div className="step1__section-header_titles">
                <h6>Step 1</h6>
                <h1>Connect Your Content</h1>
                <p>
                  Bring all of your content together and get a Homepage that
                  <br />
                  automatically updates whenever you create anywhere online.
                </p>
                <Link to="/#">View Avaliable Sources</Link>
              </div>
              </Zoom>
            <div className="step1__section-main_info">
              <Fade left><div className="step1__section-main_info-text">
                <h6>Your Homepage</h6>
                <h1>
                  Your Content. <br /> All in <span>One Spot</span>
                </h1>
                <p>
                  <span>1</span> Bring all of your content together into one
                  homepage.
                </p>
                <p id="for__margin">
                  <span>2</span> Your page automatically updates whenever you
                  create.
                </p>
                <div className="step1__section-main_info-text_links">
                  <Link to={"/#"} className="get_started">
                    Get Started Now
                  </Link>
                  <Link to={"/#"} className="view_demo">
                    View A Demo
                  </Link>
                </div>
              </div></Fade>
              <Fade right><div className="step1__section-main_info-image">
                <img src="/images/charlie.png" alt="charlie puth" />
              </div></Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
