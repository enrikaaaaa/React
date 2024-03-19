import PropTypes from "prop-types";
import "../styles/Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <h1>Hi, I am Enrika</h1>
      <p>I am a passionate web developer</p>
    </div>
  );
}

Hero.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Hero;
