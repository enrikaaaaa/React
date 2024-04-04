import axios from "axios";
import { API } from "./consts";

export const fetchCourses = async () => {
  const response = await axios.get(`${API}/courses`);
  return response.data;
};

export const createCourse = async (course) => {
  const response = await axios.post(`${API}/courses`, course);
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(`${API}/courses/${course.id}`, course);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(`${API}/courses/${id}`);
  return response.data;
};

export const getCourseById = async (id) => {
  const response = await axios.get(`${API}/courses/${id}`);
  return response.data;
};
