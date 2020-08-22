import React from "react";
import "./landingPage.css";
import stHeader from "../../media/ipl.jpg";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

const LandingPage = () => {
 
  return (

    <section className="lp-sec">
      <div className="lp-image">
     
        <Fade>
          <img
            src={stHeader}
            alt="Sachin's poster"
            className="img-card"
          />
        </Fade>
      </div>
      <div className="lp-content">
        <Fade bottom delay={1000}>
          <span className="pd-700 name">Indian Premier League</span>
        </Fade>
        <br />
        <Fade bottom delay={8000}>
          <p
            className="ssp-300 lp-subhead"
            style={{
              color: "white"
            }}
          >
      The IPL has taken the game to virtually every house in the world        <br />
            <br />
            Does the data agree? Let's find out.
          </p>
          <Link to="/stats" style={{ textDecoration: "none" }}>
            <Fade bottom delay={10000}>
              <button className="ssp-400 insights-button">
                Let's Dive deep
              </button>
            </Fade>
          </Link>
        </Fade>
      </div>
      <div className="lp-border" />
    </section>
  );
};

export default LandingPage;
