import PropTypes from "prop-types";
const Picture = ({ image, alt }) => {
  if (!image) {
    return null;
  }
  return <img src={image} alt={alt} />;
};

Picture.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default Picture;
