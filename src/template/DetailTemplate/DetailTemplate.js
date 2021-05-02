import React from "react";
// setup Route
import { Route } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

export default function DetailTemplate(props) {
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
            <SideBar></SideBar>
            <div className="wrapper _bg4586">
              <Component {...propsRoute} />
              <Footer></Footer>
            </div>
          </div>
        );
      }}
    />
  );
}
