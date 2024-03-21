import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/api";

const Users = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        setFilteredUsers(response.data);
      })
      .catch((error) => {
        console.error("Klaida gavant duomenis", error);
        setError("Klaida gavant duomenis");
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <li>No users found</li>
        )}
      </ul>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Users;
