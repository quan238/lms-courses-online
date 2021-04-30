// Import css files
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/slick-carousel/slick/slick.css";

//import route
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

//import history
import { createBrowserHistory } from "history";
import { routesHome, routesInstructor } from "../../routes";

//template
import HomeTemplate from "../../template/HomeTemplate";
import InstructorTemplate from "../../template/InstructorTemplate/InstructorTemplate";

import Login from "../../pages/Login/Login";

import ScrollToTop from "./ScrollToTop";

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

const showItemInsutrctor = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <InstructorTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        ></InstructorTemplate>
      );
    });
  }
};

function App(props) {
  // get data from local to state

  return (
    <Router history={history}>
      <div className="App">
        <ScrollToTop>
          <Switch>
            {showItemHome(routesHome)}
            {showItemInsutrctor(routesInstructor)}
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
