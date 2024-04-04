import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchUsers, updateUser } from "../../api/users";
import { useEffect, useState } from "react";

import Loader from "../../components/Loader";
import { ROUTES } from "../../routes/consts";
import styles from "./EditUser.module.scss";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      fetchUsers()
        .then((response) => {
          const foundUser = response.find((user) => user.id === +id);
          setUser(foundUser);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUser(user);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    return <div>User not found...</div>;
  }

  return (
    <div className={styles.formContainer}>
      <Link to={-1}>Go back</Link>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          id="name"
          placeholder="Name"
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />

        <input
          className={styles.inputField}
          id="surname"
          name="surname"
          placeholder="Surname"
          value={user.surname}
          onChange={handleUserChange}
        />
        <input
          className={styles.inputField}
          id="age"
          name="age"
          placeholder="Age"
          value={user.age}
          onChange={handleUserChange}
        />
        <button className={styles.button} type="submit">
          Update student
        </button>
      </form>
    </div>
  );
};

export default EditUser;
