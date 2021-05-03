// import pages

import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import LiveStreams from "./pages/LiveStreams/LiveStreams";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SaveCourses from "./pages/SaveCourses/SaveCourses";
import Profile from "./pages/Profile/Profile";
import Live_output from "./pages/LiveStreams/Live_Output/Live_output";

// instructor
import CreateNewCourses from "./pages/Instructor/CreateNewCourses/CreateNewCourses";
import DetailCouse from "./pages/DetailCourse/DetailCouse";
import InstructorCourse from "./pages/Instructor/Instructor_Course/InstructorCourse";
import Dashboard from "./pages/Instructor/Dashboard/Dashboard";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  { path: "/livestreams", exact: true, component: LiveStreams },
  {
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    path: "/explore",
    exact: true,
    component: Explore,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/savecourses",
    exact: true,
    component: SaveCourses,
  },
  {
    path: "/signup",
    exact: true,
    component: Register,
  },
  {
    path: "/liveoutput",
    exact: true,
    component: Live_output,
  },

  //   { path: "/login", exact: true, component: Login },
];

const routesInstructor = [
  {
    path: "/create-new-courses",
    exact: true,
    component: CreateNewCourses,
  },
  {
    path: "/instructorCourses",
    extact: true,
    component: InstructorCourse,
  },
  { path: "/dashboard", extact: true, component: Dashboard },
];

const routeDetail = [
  {
    path: "/profile",
    extact: true,
    component: Profile,
  },
  {
    path: "/detailcourse:id",
    extact: true,
    component: DetailCouse,
  },
];
export { routesHome, routesInstructor, routeDetail };
