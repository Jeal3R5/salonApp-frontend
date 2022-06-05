import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="socials">
        <a href="https://facebook.com" className="fa fa fa-facebook"></a>
        <a href="https://www.twitter.com" className="fa fa-twitter"></a>
        <a href="https://www.instagram.com" className="fa fa-instagram"></a>
      </div>

      <nav className="nav">
        <Link to="/">
          <div>Stylists</div>
        </Link>
        <Link to="/services">
          <div>Services</div>
        </Link>
      </nav>
    </div>
  );
}

export default Footer;



