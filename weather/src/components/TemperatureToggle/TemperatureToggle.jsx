import PropTypes from "prop-types";

const TemperatureToggle = ({ temperatureUnit, toggleTemperatureUnit }) => {
  return (
    <button className="fToC" onClick={toggleTemperatureUnit}>
      {temperatureUnit === "C" ? "F" : "C"}
    </button>
  );
};

TemperatureToggle.propTypes = {
  temperatureUnit: PropTypes.string.isRequired,
  toggleTemperatureUnit: PropTypes.func.isRequired,
};

export default TemperatureToggle;
