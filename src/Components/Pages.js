import React from "react";
import "./Pages.css";
function Pages({ model, link, desc, btn1, btn2 }) {
  return (
    <div
      style={{
        backgroundImage: `url(
          "${link}"
        )`,
      }}
      className="page1"
    >
      <div className="page1__center">
        <div className="top__center">
          <h1 className="name">{model}</h1>
          <p className="description">{desc}</p>
        </div>
        <div className="bottom__center">
          <a href="#" className="order">
            {btn1}
          </a>
          <a href="#" className="inventory">
            {btn2}
          </a>
          <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
