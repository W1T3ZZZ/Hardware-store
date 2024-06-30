import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div className="app__aboutus flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center"></div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>

        <p className="p__opensans">
          We are community which brings a stories and connect people
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>

      <div className="app__aboutus-content_drill flex__center">
        <img src={images.drill3} alt="about_drill" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">History</h1>

        <p className="p__opensans">
          We are community which brings a stories and connect people
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
