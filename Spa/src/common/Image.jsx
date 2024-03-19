import PropTypes from "prop-types";
import "./Image.css";

const Image = ({ src, alt, className }) => {
  return (
    <div>
      <img className={className} src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Image;
