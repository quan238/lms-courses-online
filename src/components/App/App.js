// import css

// import slick slider
// Import css files
// import "slick-carousel/slick/slick.css";

//import route
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

//import history
import { createBrowserHistory } from "history";
import { routesHome, routesAdmin } from "../../routes";

//template
import HomeTemplate from "../../template/HomeTemplate";

export const history = createBrowserHistory();
//Đối tượng giúp chuyển hướng trang bất kì file nào

const showItemHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        ></HomeTemplate>
      );
    });
  }
};

// const showItemAdmin = (routes) => {
//   if (routes && routes.length > 0) {
//     return routes.map((item, index) => {
//       return (
//         <AdminTemplate
//           key={index}
//           exact={item.exact}
//           path={item.path}
//           Component={item.component}
//         ></AdminTemplate>
//       );
//     });
//   }
// };

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          {showItemHome(routesHome)}
          {/* {showItemAdmin(routesAdmin)} */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
