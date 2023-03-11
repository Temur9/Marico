import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import "./Step3.scss";

const Step3 = () => {
  return (
    <>
      <div className="step3">
        <div className="container">
          <div className="step3__section">
            <Zoom>
              <div className="step3__section-header_titles">
                <h6>Step 3</h6>
                <h1>Send Emails & Text Messages</h1>
                <p>
                  No more going through a social platform. Reach and engage{" "}
                  <br /> your audience directly over email and text massage.
                </p>
              </div>
            </Zoom>
            <div className="step3__section-main_info">
              <Fade left>
                <div className="step3__section-main_info-text">
                  <h6>Create & Share</h6>
                  <h1>
                    Reach Your <br />
                    Audience <span>Directly.</span>
                  </h1>
                  <p>
                    <span>1</span> Embed content or create something new to
                    share.
                  </p>
                  <p id="for__margin">
                    <span>2</span> Share content over email, text message or
                    your homepage.
                  </p>
                  <div className="step3__section-main_info-text_links">
                    <Link to={"/#"} className="get_started">
                      Get Started Now
                    </Link>
                    <Link to={"/#"} className="view_demo">
                      View A Demo
                    </Link>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="step3__section-main_info-image">
                  <img src="/images/blackpink.png" alt="charlie puth" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
