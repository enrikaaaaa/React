import PropTypes from "prop-types";

const ListItem = ({ name, href }) => {
  return (
    <li>
      <button href={href}>{name}</button>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
};

export default ListItem;
