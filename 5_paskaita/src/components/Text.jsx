import PropTypes from "prop-types";

const Text = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
