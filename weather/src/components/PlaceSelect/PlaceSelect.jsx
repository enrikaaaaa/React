import PropTypes from "prop-types";

const PlaceSelect = ({ filteredPlaces, handleSelectChange }) => {
  return (
    <select id="filteredPlace" onChange={handleSelectChange}>
      <option value="">Pasirinkite vietovę...</option>
      {filteredPlaces.map((place) => (
        <option key={place.code} value={place.code}>
          {place.name}
        </option>
      ))}
    </select>
  );
};

PlaceSelect.propTypes = {
  filteredPlaces: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

export default PlaceSelect;
