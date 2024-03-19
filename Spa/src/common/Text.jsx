import PropTypes from "prop-types";
import "./Text.css";

const Text = ({ children, className }) => (
  <p className={className}>{children}</p>
);

Text.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Text;
