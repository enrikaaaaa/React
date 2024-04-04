import { useState, useEffect } from "react";
import { useNavigate, generatePath } from "react-router-dom";
import { fetchUsers, deleteUser } from "../../api/users";
import UserList from "./UserList";
import Loader from "../../components/Loader";
import { ROUTES } from "../../routes/consts";
import styles from "./Home.module.scss";
import NewUser from "../NewUser/NewUser";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      fetchUsers()
        .then((response) => {
          setUsers(response);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  const handleEditUser = (id) => {
    const path = generatePath(ROUTES.EDIT_USER, { id });
    navigate(path);
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <button className={styles.createButton} onClick={() => setIsOpen(true)}>
        Create new user
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <NewUser setUsers={setUsers} setIsOpen={setIsOpen} />
      </Modal>

      <UserList
        users={users}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
};

export default Home;
