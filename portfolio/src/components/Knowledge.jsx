import "../styles/Knowledge.css";
import ListItem from "./ListItem";

import PropTypes from "prop-types";

function Knowledge(props) {
  return (
    <div className="knowledge" id="2">
      <div className="knowledge-content-item">
        <h2>{props.h2}</h2>
        <ListItem />
        {props.children}
      </div>
    </div>
    // </div>
  );
}

Knowledge.propTypes = {
  h2: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Knowledge;
