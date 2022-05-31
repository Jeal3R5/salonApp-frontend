import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="little footer">
        <p>Bellegente</p>
        <p>1234 Rainbow Lane, Florence, MilkyWay</p>
        <p>987-258-9137</p>
        <p>INSERT SOCIAL MEDIA ICONS HERE PLEASE</p>
      </div>
      <nav className="nav">
        <Link to="/">
          <div>Stylists</div>
        </Link>
        <Link to="/services">
          <div>Services</div>
        </Link>
        <Link to="contact">
          <div>Contact</div>
        </Link>
      </nav>
    </div>
  );
}

export default Footer;
