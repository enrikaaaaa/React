import PropTypes from "prop-types";

function ListItem(props) {
  return (
    <ul>
      <li>{props.li}</li>
    </ul>
  );
}

ListItem.propTypes = {
  li: PropTypes.string.isRequired,
};

export default ListItem;
