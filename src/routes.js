// import pages

import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import LiveStreams from "./pages/LiveStreams/LiveStreams";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SaveCourses from "./pages/SaveCourses/SaveCourses";

// admin
// import CoursesAdmin from "./Admin/Pages/CoursesAdmin";
// import Settings from "./Admin/Pages/Settings";
// import HomePage from "./Admin/Pages/HomePage";
// home

// import Login from "./Pages/Login/Login";

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
  //   { path: "/login", exact: true, component: Login },
];

// const routesAdmin = [
//   {
//     path: "/admin",
//     exact: true,
//     component: HomePage,
//   },
//   { path: "/settings", exact: true, component: Settings },
//   { path: "/coursesAdmin", exact: true, component: CoursesAdmin },
// ];

export { routesHome };
