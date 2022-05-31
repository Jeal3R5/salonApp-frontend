import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <h1>Bellegente</h1>
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

export default Header;
