import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Pages from "./Components/Pages";
import Accessories from "./Components/Accessories";
import Hamburger from "./Components/Hamburger";

function App() {
  const mobile = window.innerWidth;
  return (
    <div className="app overlay">
      <Navbar />
      <div className="parent">
        <Pages
          link={
            mobile > 511
              ? "https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
              : "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          model="Model S"
          desc="Order Online for Touchless Delivery"
          btn1="CUSTOM ORDER"
          btn2="EXISTING INVENTORY"
        />
        <Pages
          link={
            mobile > 511
              ? "https://cdn.motor1.com/images/mgl/VpmYz/s1/tesla-model-y.jpg"
              : "https://images.unsplash.com/photo-1600661288038-cb63953bfc9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          model="Model Y"
          desc="Order Online for Touchless Delivery"
          btn1="CUSTOM ORDER"
          btn2="EXISTING INVENTORY"
        />
        <Pages
          link={
            mobile > 511
              ? "https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social"
              : "https://images.unsplash.com/photo-1571987502227-9231b837d92a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
          }
          model="Model 3"
          desc="Order Online for Touchless Delivery"
          btn1="CUSTOM ORDER"
          btn2="EXISTING INVENTORY"
        />
        <Pages
          link="https://tesla-cdn.thron.com/delivery/public/image/tesla/4b516502-71a4-476f-acd4-0e326c785657/bvlatuR/std/2880x1800/MX-Exterior-Hero-Desktop"
          model="Model X"
          desc="Order Online for Touchless Delivery"
          btn1="CUSTOM ORDER"
          btn2="EXISTING INVENTORY"
        />
        <Pages
          link="https://www.teslarati.com/wp-content/uploads/2020/03/tesla-solar-panels-house-scaled.jpg"
          model="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          btn1="ORDER NOW"
          btn2="LEARN MORE"
        />
        <Pages
          link="https://www.tesla.com/sites/default/files/solarroof/v3/design/solar-roof_design_D.jpg"
          model="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          btn1="ORDER NOW"
          btn2="LEARN MORE"
        />
        <Accessories />
      </div>
      <Hamburger />
    </div>
  );
}

export default App;
