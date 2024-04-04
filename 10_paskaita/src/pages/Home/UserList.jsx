import PropTypes from "prop-types";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "../../routes/consts";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing icons from react-icons

const UserList = ({ users, handleEditUser, handleDeleteUser }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <Link to={generatePath(ROUTES.USER, { id: user.id })}>
            {user.name} {user.surname}
          </Link>
          <div className="user-actions">
            <button
              className="edit-button"
              onClick={() => handleEditUser(user.id)}
            >
              <FaEdit />
            </button>
            <button
              className="delete-button"
              onClick={() => handleDeleteUser(user.id)}
            >
              <FaTrashAlt />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  handleEditUser: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
};

export default UserList;
