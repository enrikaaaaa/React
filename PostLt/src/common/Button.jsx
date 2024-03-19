import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ secondary, white, children, arrow, arrow_before }) => {
  return (
    <button
      className={`button ${secondary ? "secondary" : ""} ${
        white ? "white" : ""
      } ${arrow ? "arrow" : ""} ${arrow_before ? "arrow_before" : ""}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  secondary: PropTypes.bool,
  white: PropTypes.bool,
  children: PropTypes.node.isRequired,
  arrow: PropTypes.bool,
  arrow_before: PropTypes.bool,
};

export default Button;
