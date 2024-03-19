import PropTypes from "prop-types";
import "../styles/avatar.css";

const Avatar = ({ name }) => {
  return (
    <div className="avatar">
      <h2>
        {name
          .split(" ")
          .map((item) => item.toUpperCase().substring(0, 1)) 
          .join(" ")}
      </h2>
    </div>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Avatar;
