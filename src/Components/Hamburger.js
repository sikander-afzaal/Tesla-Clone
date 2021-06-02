import React from "react";
import "./Hamburger.css";
function Hamburger() {
  const mobile = window.innerWidth;
  return (
    <div className="hamburger-menu hidden visuallyhidden">
      {mobile > 511 ? (
        <div className="menu__container">
          <a href="" className="burger-links">
            EXISTING INVENTORY
          </a>
          <a href="" className="burger-links">
            USED INVENTORY
          </a>
          <a href="" className="burger-links">
            TRADE-IN
          </a>
          <a href="" className="burger-links">
            CYBERTRUCK
          </a>
          <a href="" className="burger-links">
            ROADSTER
          </a>
          <a href="" className="burger-links">
            SEMI
          </a>
          <a href="" className="burger-links">
            CHARGING
          </a>
          <a href="" className="burger-links">
            POWERWALL
          </a>
          <a href="" className="burger-links">
            COMMERCIAL ENEGRY
          </a>
          <a href="" className="burger-links">
            UTILITIES
          </a>
          <a href="" className="burger-links">
            TEST DRIVE
          </a>
          <a href="" className="burger-links">
            FIND US
          </a>
          <a href="" className="burger-links">
            SUPPORT
          </a>
          <a href="" className="burger-links">
            UNITED STATES
          </a>
        </div>
      ) : (
        <div className="menu__container">
          <a href="" className="burger-links">
            MODEL S
          </a>
          <a href="" className="burger-links">
            MODEL 3
          </a>
          <a href="" className="burger-links">
            MODEL X
          </a>
          <a href="" className="burger-links">
            MODEL Y
          </a>
          <a href="" className="burger-links">
            SOLAR ROOF
          </a>
          <a href="" className="burger-links">
            SOLAR PANELS
          </a>
          <a href="" className="burger-links">
            EXISTING INVENTORY
          </a>
          <a href="" className="burger-links">
            USED INVENTORY
          </a>
          <a href="" className="burger-links">
            TRADE-IN
          </a>
          <a href="" className="burger-links">
            CYBERTRUCK
          </a>
          <a href="" className="burger-links">
            ROADSTER
          </a>
          <a href="" className="burger-links">
            SEMI
          </a>
          <a href="" className="burger-links">
            CHARGING
          </a>
          <a href="" className="burger-links">
            POWERWALL
          </a>
          <a href="" className="burger-links">
            COMMERCIAL ENEGRY
          </a>
          <a href="" className="burger-links">
            UTILITIES
          </a>
          <a href="" className="burger-links">
            TEST DRIVE
          </a>
          <a href="" className="burger-links">
            FIND US
          </a>
          <a href="" className="burger-links">
            SUPPORT
          </a>
          <a href="" className="burger-links">
            UNITED STATES
          </a>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
