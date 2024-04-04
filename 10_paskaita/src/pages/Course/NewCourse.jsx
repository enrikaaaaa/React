import { useNavigate } from "react-router-dom";
import { createCourse } from "../../api/courses";
import { ROUTES } from "../../routes/consts";
import PropTypes from "prop-types";
import styles from "./NewCourse.module.scss";

const NewCourse = ({ setCourses, setIsOpen }) => {
  const navigate = useNavigate();

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { title, description, length } = event.target;
    const courseId = generateUniqueId();
    const course = {
      id: courseId,
      title: title.value,
      description: description.value,
      length: length.value,
    };
    try {
      const newCourse = await createCourse(course);
      setCourses((prevCourses) => [...prevCourses, newCourse]);
      setIsOpen(false);
      navigate(ROUTES.COURSES);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.newCourseForm} onSubmit={handleSubmit}>
      <h1 className={styles.newCourseTitle}>New Course:</h1>
      <label htmlFor="title">Title:</label>
      <input
        className={styles.newCourseInput}
        type="text"
        id="title"
        name="title"
        required
      />
      <label htmlFor="description">Description:</label>
      <textarea
        className={styles.newCourseInput}
        id="description"
        name="description"
        required
      ></textarea>
      <label htmlFor="length">Length:</label>
      <input
        className={styles.newCourseInput}
        type="text"
        id="length"
        name="length"
        required
      />
      <button className={styles.newCourseButton} type="submit">
        Create Course
      </button>
    </form>
  );
};

NewCourse.propTypes = {
  setCourses: PropTypes.func,
  setIsOpen: PropTypes.func,
};

export default NewCourse;
