import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/api";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        setFilteredUsers(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="container-spinner">
        <div className="spinner-frame">
          <div className="spinner-cover"></div>
          <div className="spinner-bar"></div>
        </div>
      </div>
    );
  }
  const handleSortUsers = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (isAscending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredUsers(sortedUsers);
    setIsAscending(!isAscending);
  };
  return (
    <div>
      <h2 className="heading">Users</h2>
      <button className="btn-asc" onClick={handleSortUsers}>
        {isAscending ? "Asc" : "Desc"}
      </button>
      <div className="usersContainer">
        {filteredUsers.map((user) => (
          <span key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
            <div className="userCard">
              <div className="userCardOwnerName">
                <h2>{user.name}</h2>
              </div>
              <div>
                <p>Email:</p> <p>{user.email}</p>
              </div>
              <div>
                <p>Username:</p> <p>{user.username}</p>
              </div>
            </div>
          </span>
        ))}
        {error && <div>{error}</div>}
        <button
          onClick={() => (window.location.href = "/")}
          className="back-button"
        ></button>
      </div>
    </div>
  );
};

export default Users;
