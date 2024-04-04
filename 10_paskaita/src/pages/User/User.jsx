import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchUsers } from "../../api/users";
import Loader from "../../components/Loader";
import { ROUTES } from "../../routes/consts";
import styles from "./User.module.scss";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUsers();
        const foundUser = response.find((user) => user.id === +id);
        setUser(foundUser);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(fetchData, 2000);
  }, [id]);

  return (
    <div className={styles.userContainer}>
      <Link to={ROUTES.HOME} className={styles.goBackLink}>
        Go back
      </Link>
      <h1 className={styles.userTitle}>User Information</h1>
      {isLoading && <Loader />}
      {!isLoading && !user && (
        <div className={styles.userNotFound}>
          <strong>User not found</strong>
        </div>
      )}
      {!isLoading && user && (
        <div className={styles.userInfo}>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Surname:</strong> {user.surname}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
        </div>
      )}
    </div>
  );
};

export default User;
