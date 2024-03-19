import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Nav = ({ className }) => {
  return (
    <div>
      <nav className={className}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/news">News</Link>
        <Link to="/services">Services</Link>
        <Link to="/works">Works</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </div>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};

export default Nav;
