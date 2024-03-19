import PropTypes from "prop-types";
import Text from "../../common/Text";
import "./Card.css";

const Card = ({ service, text }) => {
  return (
    <>
      <div className="cardServices">
        <Text className={"h1"}>{service}</Text>
        <Text className={"h2"}>{text}</Text>
      </div>
    </>
  );
};

Card.propTypes = {
  service: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
