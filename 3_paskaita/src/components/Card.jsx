import PropTypes from "prop-types";
import "../styles/card.css";

const Card = ({ title, subtitle, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{subtitle}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
