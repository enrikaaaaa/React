import PropTypes from "prop-types";

const Text = ({ text, h1, h2 }) => {
  return (
    <div
      className={`text ${text ? "text" : ""} ${h1 ? "h1" : ""} ${
        h2 ? "h2" : ""
      }`}
    >
      {text}
    </div>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  h1: PropTypes.string,
  h2: PropTypes.string,
};

export default Text;
