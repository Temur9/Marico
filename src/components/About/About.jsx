import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import AboutText from "./about-text";
import "./About.scss";
import employee from "./Employee";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about__section">
            <Fade top><div className="about__section-title">
              <div className="about__section-title_logo">
                <img src="/images/Logo.svg" alt="logo" />
                <p>Marico</p>
              </div>
              <div className="about__section-title_mission">
                <h6>Our Mission</h6>
                <h1>
                  We exist to help creators <br /> own their audience.
                </h1>
                <p>
                  We believe that social platforms are taking advantage of
                  creators. <br /> We want to change that and help creators
                  fight back.
                </p>
              </div>
            </div></Fade>
            <Zoom>
              <AboutText/>
            </Zoom>
            <div className="about__section-team">
              <Fade top>
                <h6>Our Team</h6>
                <h1>We love creators</h1>
              </Fade>
              <div className="about__section-team_employee">
                <Zoom>
                  {employee.map(({ img, alt, name, profession }) => (
                    <div className="employee">
                      <img className="employee_img" src={img} alt={alt} />
                      <h3>{name}</h3>
                      <p>{profession}</p>
                      <div className="employee_link">
                        <Link to={"/#"}>Twitter</Link>
                        <img
                          className="link_arrow"
                          src="/images/Arrow.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  ))}
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
