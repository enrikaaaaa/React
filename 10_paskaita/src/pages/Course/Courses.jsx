import { useEffect, useState } from "react";

import CourseList from "./CourseList";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal/Modal";
import NewCourse from "./NewCourse";
import { fetchCourses } from "../../api/courses";
import styles from "./Courses.module.scss";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetchCourses()
        .then((response) => {
          setCourses(response);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to fetch courses. Please try again later.");
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.coursesContainer}>
      <button className={styles.createButton} onClick={() => setIsOpen(true)}>
        Create new course
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <NewCourse setCourses={setCourses} setIsOpen={setIsOpen} />
      </Modal>
      <CourseList courses={courses} setCourses={setCourses} />
    </div>
  );
};

export default Courses;
