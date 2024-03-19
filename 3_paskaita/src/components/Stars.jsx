import PropTypes from "prop-types";
import "../styles/stars.css";

const Stars = ({ rating }) => {
  const maxStars = 5;

  const starIcons = Array.from({ length: maxStars }, (_, index) => (
    <span key={index} className={index < rating ? "star-filled" : "star-empty"}>
      ★
    </span>
  ));

  return <div className="stars">{starIcons}</div>;
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
