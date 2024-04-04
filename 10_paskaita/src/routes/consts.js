import Home from "../pages/Home/Home";
import User from "../pages/User/User";
import NewUser from "../pages/NewUser/NewUser";
import EditUser from "../pages/EditUser/EditUser";
import Courses from "../pages/Course/Courses";
import NewCourse from "../pages/Course/NewCourse";
import BasicLayout from "../components/layouts/BasicLayout";

export const ROUTES = {
  HOME: "/",
  USER: "/:id",
  NEW_USER: "/new",
  EDIT_USER: "/:id/edit",
  COURSES: "/courses",
  NEW_COURSE: "/courses/new",
};

export const routes = [
  {
    path: ROUTES.HOME,
    Component: Home,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.NEW_USER,
    Component: NewUser,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.EDIT_USER,
    Component: EditUser,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.USER,
    Component: User,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.COURSES,
    Component: Courses,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.NEW_COURSE,
    Component: NewCourse,
    Layout: BasicLayout,
  },
];
export const navigationBarLinks = [
  {
    title: "Home",
    path: ROUTES.HOME,
  },
  {
    title: "Courses",
    path: ROUTES.COURSES,
  },
];
