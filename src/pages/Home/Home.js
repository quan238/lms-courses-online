import React, { Fragment } from "react";
import Courses from "../../components/Courses/Courses";
import LiveStream from "../../components/LiveStream/LiveStream";
import Info_rs from "../../components/RightSide/Info/Info_rs";

export default function Home() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <LiveStream />
            {/* feature1 */}
            <div className="section3125 mt-50">
              <h4 class="item_title">Featured Courses</h4>
              <a href="#" class="see150">
                See all
              </a>
              <Courses></Courses>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="right_side">
              <Info_rs></Info_rs>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12" />
        </div>
      </div>
    </Fragment>
  );
}
