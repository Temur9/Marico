import React from "react";
import './Why.scss'

const Why = () => {
  return (
    <>
      <div className="why">
        <div className="container">
          <div className="why__section">
            <div className="why__section-title">
              <h1>Why Creators Love Marico</h1>
            </div>
            <div className="why__section-reasons">
              <div className="reason">
                <h4>
                  <img src="/images/Smile_emoji.svg" alt="smile-emoji" />
                  Reduced Anxiety
                </h4>
                <p>Never worry about losing your audience.</p>
              </div>
              <div className="reason">
                <h4>
                  <img src="/images/Happy_emoji.svg" alt="smile-emoji" />
                  Lower Workload
                </h4>
                <p>Just share one link. We'll handle the rest.</p>
              </div>
              <div className="reason">
                <h4>
                  <img src="/images/Party_emoji.svg" alt="smile-emoji" />
                  More Time
                </h4>
                <p>Never worry about losing your audience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
