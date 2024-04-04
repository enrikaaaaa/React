import Modal from "../../components/Modal/Modal";
import EditCourse from "./EditCourse";
import { useState } from "react";
import PropTypes from "prop-types";
import { deleteCourse } from "../../api/courses";
import styles from "./CourseList.module.scss";

const CourseList = ({ courses, setCourses }) => {
  const [isOpen, setIsOpen] = useState(false);

  const deleteCourseHandler = async (id) => {
    try {
      await deleteCourse(id);
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <table className={styles.courseTable}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Length</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td>{course.title}</td>
            <td>{course.description}</td>
            <td>{course.length + "Year"}</td>
            <td>
              <button
                className={styles.deleteButton}
                onClick={() => deleteCourseHandler(course.id)}
              >
                Delete
              </button>
              <button
                className={styles.editButton}
                onClick={() => setIsOpen(true)}
              >
                Edit
              </button>
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <EditCourse
                  courseId={course.id.toString()}
                  setIsOpen={setIsOpen}
                />
              </Modal>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  setCourses: PropTypes.func.isRequired,
};

export default CourseList;
