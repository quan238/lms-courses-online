// import pages

import Home from "./pages/Home/Home";

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
