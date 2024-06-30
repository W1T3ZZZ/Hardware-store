import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new topic with our coffees" />
      <h1 className="app__header-h1">The key to Fine Drinks</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Where you can sit all day, discuss all the topics, meet new people and
        to the Godies and pour the beer and water
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.way} alt="header img" />
    </div>
  </div>
);

export default Header;
