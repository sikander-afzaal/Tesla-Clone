import React, { useState } from "react";
import "./Navbar.css";
import logo from "../tesla-9.svg";
function Navbar() {
  const mobile = window.innerWidth;

  const [burger, setBurger] = useState(false);
  const clickHandler = (e) => {
    if (
      document.querySelector(".hamburger-menu").classList.contains("hidden")
    ) {
      document.querySelector(".hamburger-menu").classList.remove("hidden");
      setTimeout(function () {
        document
          .querySelector(".hamburger-menu")
          .classList.remove("visuallyhidden");
        document.querySelector(".hamburger-menu").classList.add("open");
      }, 20);
    } else {
      document.querySelector(".hamburger-menu").classList.add("visuallyhidden");
      document.querySelector(".hamburger-menu").classList.remove("open");

      document.querySelector(".hamburger-menu").addEventListener(
        "transitionend",
        function (e) {
          document.querySelector(".hamburger-menu").classList.add("hidden");
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
    }

    document.querySelector(".hamburger").classList.toggle("active");
    if (mobile > 511) {
      document.querySelector(".shop").classList.toggle("opacity");
      document.querySelector(".account").classList.toggle("opacity");
    }
    document.querySelectorAll(".burger-links").forEach((link) => {
      link.classList.toggle("open__link");
    });
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img className="logo" src={logo} alt="" />
      </div>
      {mobile > 511 ? (
        <>
          <div className="navbar__models">
            <p className="models">MODEL S</p>
            <p className="models">MODEL 3</p>
            <p className="models">MODEL X</p>
            <p className="models">MODEL Y</p>
            <p className="models">SOLAR ROOF</p>
            <p className="models">SOLAR PANELS</p>
          </div>
          <div className="navbar__right">
            <p className="shop">SHOP</p>
            <p className="account">TESLA ACCOUNT</p>
            <ul onClick={clickHandler} className="hamburger">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>{" "}
        </>
      ) : (
        <ul onClick={clickHandler} className="hamburger">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
