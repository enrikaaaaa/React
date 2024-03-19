import PropTypes from "prop-types";

const Hero = ({ h1, h2 }) => {
  if (!h1 && !h2) {
    return null;
  } else {
    return (
      <div className="hero">
        <h1>{h1}</h1>
        <h2>{h2}</h2>
      </div>
    );
  }
};

Hero.propTypes = {
  h1: PropTypes.string,
  h2: PropTypes.string,
};

export default Hero;
