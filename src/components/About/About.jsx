import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./About.scss";
import employee from "./Employee";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about__section">
            <div className="about__section-title">
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
            </div>
            <div className="about__section-info">
              <p>
                Building a career on social platforms is like building a home on
                someone else's land. While social platforms are great for
                discovering and reaching your audience, your goal as a creator
                should be to convert your followers into email or text message
                subscribers. Why? Look no further than TikTok. Almost overnight,
                millions of creative people almost lost their careers.
              </p>
              <br />
              <p>
                If a platform removes your account, or their algorithm for
                distribution no longer favours you, are you prepared?
              </p>
              <br />
              <p>
                If you want to build a career as a creator, your focus should be
                on building durable distribution channels. Without distribution,
                you have no business. So how can you build an audience that you
                actually own? With emails and phone numbers. These distribution
                channels are direct. Instead of going through some algorithm,
                when you share over email and text message, you know that your
                audience will see your content. Even better is the fact that you
                own these lists. Instagram removes your acount, you're ok.
                YouTube changes their algorithm, you're ok. You own your
                audience.
              </p>
              <br />
              <p>
                We built Marico to make this process easy, fast, and effective.
                The traditional solution to this problem involves spending days
                building a website or hiring someone expensive to do it for you.
                But those days are gone. With Marico, you get a portfolio that
                is always up-to-date and converts visitors into email or text
                message subscribers. The best thing? It takes under 5 minutes to
                setup, and it automatically updates whenever you post new
                content anywhere online. We believe the best tools are the ones
                you don't even notice. Marico helps you build your own audience,
                without any hassle or time commitment. All you have to do is
                share your portfolio link with your audience, and we'll handle
                the rest.
              </p>
              <br />
              <p>
                You can also create posts from within Marico and share them in
                just a few clicks to your portfolio, and to your email and text
                message subscribers. Since all of your content is already in
                Marico, creating content takes minutes, not hours.
              </p>
              <br />
              <p>
                For too long, social platforms have taken advantage of creators.
                Fight back and build an audience that you own.
              </p>
              <br />
              <h6>- The Team Marico (Olivia, William, and Noah)</h6>
            </div>
            <div className="about__section-team">
              <h6>Our Team</h6>
              <h1>We love creators</h1>
              <div className="about__section-team_employee">
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
