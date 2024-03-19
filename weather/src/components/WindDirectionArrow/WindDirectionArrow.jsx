import PropTypes from "prop-types";
import north from "../../assets/pictures/north-arrow-image.png";
import northeast from "../../assets/pictures/northeast-arrow-image.png";
import east from "../../assets/pictures/east-arrow-image.png";
import southeast from "../../assets/pictures/southeast-arrow-image.png";
import south from "../../assets/pictures/south-arrow-image.png";
import southwest from "../../assets/pictures/southwest-arrow-image.png";
import west from "../../assets/pictures/west-arrow-image.png";
import northwest from "../../assets/pictures/northwest-arrow-image.png";
import defaultArrow from "../../assets/pictures/default-arrow-image.png";
import "./windDirectionArrow.css";

const WindDirectionArrow = ({ direction }) => {
  const getArrowImage = () => {
    switch (direction) {
      case "N":
        return north;
      case "NE":
        return northeast;
      case "E":
        return east;
      case "SE":
        return southeast;
      case "S":
        return south;
      case "SW":
        return southwest;
      case "W":
        return west;
      case "NW":
        return northwest;
      default:
        return defaultArrow;
    }
  };

  return (
    <img
      className="arrowImg"
      src={getArrowImage()}
      alt={`Wind direction: ${direction}`}
    />
  );
};

WindDirectionArrow.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default WindDirectionArrow;
