import { useNavigate } from "react-router-dom";
import { updateCourse, getCourseById } from "../../api/courses";
import { ROUTES } from "../../routes/consts";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./EditCourse.module.scss";

const EditCourse = ({ courseId, setIsOpen }) => {
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    title: "",
    description: "",
    length: "",
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseData = await getCourseById(courseId);
        setCourse(courseData);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { title, description, length } = event.target;
    const updatedCourse = {
      id: courseId,
      title: title.value,
      description: description.value,
      length: length.value,
    };
    try {
      await updateCourse(updatedCourse);
      setIsOpen(false);
      navigate(ROUTES.COURSES);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCourseChange = (event) => {
    setCourse({ ...course, [event.target.id]: event.target.value });
  };

  return (
    <form className={styles.editCourseForm} onSubmit={handleSubmit}>
      <h1 className={styles.editCourseTitle}>Edit Course:</h1>
      <label htmlFor="title">Title:</label>
      <input
        className={styles.editCourseInput}
        type="text"
        id="title"
        name="title"
        required
        value={course.title}
        onChange={handleCourseChange}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        className={styles.editCourseInput}
        id="description"
        name="description"
        required
        value={course.description}
        onChange={handleCourseChange}
      ></textarea>
      <label htmlFor="length">Length:</label>
      <input
        className={styles.editCourseInput}
        type="text"
        id="length"
        name="length"
        required
        value={course.length}
        onChange={handleCourseChange}
      />
      <button className={styles.editCourseButton} type="submit">
        Update Course
      </button>
    </form>
  );
};

EditCourse.propTypes = {
  courseId: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default EditCourse;
