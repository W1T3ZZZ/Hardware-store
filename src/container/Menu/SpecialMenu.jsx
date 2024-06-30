import React, { useEffect, useRef, useState } from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = function () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
          <SubHeading title="Menu that repair your hardware" />
          <h1 className="headtext__cormorant" style={{ color: "#eeeeee" }}>
            Menu
          </h1>
        </div>
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_wine flex__center">
            <p className="app__specialMenu-menu_heading">Wine & Beer</p>
            <div className="app__specialMenu_menu_special">
              {data.wines
                .slice(0, isOpen ? data.wines.length : 3)
                .map((wine, index) => (
                  <MenuItem
                    key={wine.title + index}
                    title={wine.title}
                    price={wine.price}
                    tags={wine.tags}
                  />
                ))}
            </div>
          </div>

          <div className="app__specialMenu-menu_coffees flex__center">
            <p className="app__specialMenu-menu_heading">Coffees</p>
            <div className="app__specialMenu_menu_special">
              {data.coffees
                .slice(0, isOpen ? data.coffees.length : 3)
                .map((coffee, index) => (
                  <MenuItem
                    key={coffee.title + index}
                    title={coffee.title}
                    price={coffee.price}
                    tags={coffee.tags}
                  />
                ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_cocktails flex__center">
            <p className="app__specialMenu-menu_heading">Cocktails</p>
            <div className="app__specialMenu_menu_special">
              {data.cocktails
                .slice(0, isOpen ? data.cocktails.length : 3)
                .map((cocktail, index) => (
                  <MenuItem
                    key={cocktail.title + index}
                    title={cocktail.title}
                    price={cocktail.price}
                    tags={cocktail.tags}
                  />
                ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <button
            type="button"
            className="custom__button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "View less..." : "View more..."}
          </button>
        </div>
      </div>
    </>
  );
};

export default SpecialMenu;
