import { useNavigate } from "react-router-dom";
import { createUser } from "../../api/users";
import { ROUTES } from "../../routes/consts";

const NewUser = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, surname } = event.target;
    const user = { name: name.value, surname: surname.value };
    try {
      await createUser(user);
      navigate(ROUTES.HOME);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="new-user-container">
      <h2>Create New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input id="surname" name="surname" placeholder="Enter surname" />
        </div>
        <button type="submit">Create Student</button>
      </form>
    </div>
  );
};

export default NewUser;
