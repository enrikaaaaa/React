import PropTypes from "prop-types";
import "./button.css";

const Button = ({ red, blue, text, method, white }) => {
  return (
    <button
      onClick={method}
      className={`Button ${red ? "red" : ""} ${blue ? "blue" : ""} ${
        white ? "white" : ""
      }`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  red: PropTypes.bool,
  blue: PropTypes.bool,
  text: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired,
  white: PropTypes.bool,
};

export default Button;
