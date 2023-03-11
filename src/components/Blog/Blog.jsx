import React from "react";
import { Fade, Zoom } from "react-reveal";
import Footer from "../Footer/Footer";
import Help from "../Help/Help";
import "./Blog.scss";
import sources from "./Sources";
const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <div className="blog__section">
            <Fade top><div className="blog__section-title">
              <h1>Content Sources</h1>
              <p>Connect these sources to your Marico homepage.</p>
            </div></Fade>
            <div className="blog__section-sources">
              <Zoom>{sources.map(({ logo, name }) => (
                <div className="blog__section-sources_app">
                  <img src={logo} alt={name} />
                  <h3>{name}</h3>
                  <p>Connect your {name} feed to your Marico homepage.</p>
                </div>
              ))}</Zoom>
            </div>
          </div>
        </div>
      </section>
      <Help />
      <Footer />
    </>
  );
};

export default Blog;
