import React from "react";
import "./Accessories.css";
function Accessories() {
  const mobile = window.innerWidth;
  return (
    <div className="acc">
      <div className="container">
        <p>Accessories</p>
        <div className="img">
          <img
            src="https://cdn.iphoneincanada.ca/wp-content/uploads/2020/01/tesla-wall-connector.jpg"
            alt=""
          />
        </div>
        <a href="#" className="btn">
          SHOP NOW
        </a>
      </div>
      {mobile > 511 ? (
        <footer>
          <a href="" className="footer-links">
            Tesla © 2021
          </a>
          <a href="" className="footer-links">
            Privacy & Legal
          </a>
          <a href="" className="footer-links">
            Contact
          </a>
          <a href="" className="footer-links">
            Careers
          </a>
          <a href="" className="footer-links">
            Get Newsletter
          </a>
          <a href="" className="footer-links">
            News
          </a>
          <a href="" className="footer-links">
            Forums
          </a>
          <a href="" className="footer-links">
            Locations
          </a>
        </footer>
      ) : (
        <footer>
          <a href="" className="footer-links">
            Tesla © 2021
          </a>
          <a href="" className="footer-links">
            Privacy & Legal
          </a>

          <a href="" className="footer-links">
            News
          </a>
        </footer>
      )}
    </div>
  );
}

export default Accessories;
