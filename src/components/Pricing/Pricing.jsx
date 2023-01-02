import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Pricing.scss";
const Pricing = () => {
  return (
    <>
      <section className="pricing">
        <div className="container">
          <div className="pricing__section">
            <div className="pricing__section-title">
              <h1>Choose the plan that's right for you.</h1>
            </div>
            <div className="pricing__section-prices">
              <div className="pricing__section-prices_table">
                <div className="header-title">
                  <h3>Starter</h3>
                  <p>Perfect for tying out Wavium</p>
                  <h2>Free</h2>
                </div>
                <div className="info">
                  <h4>Collect Unlimited subscribers</h4>
                  <h5>500 monthly emails</h5>
                  <p>Upgrade to send more emails</p>
                </div>
                <div className="features">
                  <h4>Key features</h4>
                  <p>
                    <img src="/images/Check.svg" alt="check" />
                    Automatic updating home page
                  </p>
                  <p>
                    <img src="/images/Check.svg" alt="" />
                    Unlimited sources + posts
                  </p>
                </div>
                <div className="button">
                  <Link to={"/#"}>Start for Free</Link>
                </div>
              </div>
              <div className="pricing__section-prices_table">
                <div className="header-title">
                  <h3>Basic</h3>
                  <p>Build your online home</p>
                  <h2>
                    $14 <span>Per month</span>
                  </h2>
                </div>
                <div className="info">
                  <h4>Collect Unlimited subscribers</h4>
                  <h5>2,000 free monthly emails</h5>
                  <p>Purchase more for $0.002 per email</p>
                </div>
                <div className="features">
                  <h4>Everything in starter, plus</h4>
                  <p>
                    <img src="/images/Check.svg" alt="check" />
                    Remove Wavium branding
                  </p>
                  <p>
                    <img src="/images/Check.svg" alt="" />
                    Embed Wavium on your own domain
                  </p>
                </div>
                <div className="button">
                  <Link to={"/#"}>Start Free 14-day Trial</Link>
                </div>
              </div>
              <div className="pricing__section-prices_table">
                <div className="header-title">
                  <h3>Complete</h3>
                  <p>Enhanced engagement</p>
                  <h2>
                    $29 <span>Per month</span>
                  </h2>
                </div>
                <div className="info">
                  <h4>Collect Unlimited subscribers</h4>
                  <h5>10,000 free monthly emails</h5>
                  <p>Purchase more for $0.002 per email</p>
                </div>
                <div className="features">
                  <h4>Everything in basic, plus </h4>
                  <p>
                    <img src="/images/Check.svg" alt="check" />
                    Collect text massage subscribers
                  </p>
                  <p>
                    <img src="/images/Check.svg" alt="" />
                    Share posts over text massage
                  </p>
                </div>
                <div className="button">
                  <Link to={"/#"}>Start Free 14-day Trial</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Pricing;
