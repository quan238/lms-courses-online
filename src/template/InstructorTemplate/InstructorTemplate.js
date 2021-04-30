import React from "react";
// setup Route
import { Route } from "react-router";
import FooterInstructor from "../../components/Footer/FooterInstructor/FooterInstructor";
import Header from "../../components/Header/Header";

import SideBarInstructor from "../../components/SideBar/SideBarInstructor/SideBarInstructor";

export default function InstructorTemplate(props) {
  // declare component, route
  let { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <div className="HomeTemplate">
            {/* Header */}
            <Header></Header>
            <SideBarInstructor></SideBarInstructor>
            <div className="wrapper">
              <div class="sa4d25">
                <Component {...propsRoute} />
              </div>
              <FooterInstructor></FooterInstructor>
            </div>
          </div>
        );
      }}
    />
  );
}
