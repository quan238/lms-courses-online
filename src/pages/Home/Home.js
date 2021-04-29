import React, { Fragment } from "react";
import Courses from "../../components/Courses/Courses";
import LiveStream from "../../components/LiveStream/LiveStream";
import Info_rs from "../../components/RightSide/Info/Info_rs";
import LiveStreaming from "../../components/RightSide/LiveStreaming/LiveStreaming";

import { settings2 } from "../../config/js/config";

export default function Home() {
  console.log(settings2);
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <LiveStream setting={settings2} />
            {/* feature1 */}
            <div className="section3125 mt-50">
              <h4 class="item_title">Featured Courses</h4>
              <a href="#" class="see150">
                See all
              </a>
              <Courses></Courses>
            </div>
            <div className="section3125 mt-30">
              <h4 class="item_title">Newest Courses</h4>
              <a href="#" class="see150">
                See all
              </a>
              <Courses> </Courses>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="right_side">
              <Info_rs></Info_rs>
              <LiveStreaming></LiveStreaming>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12" />
        </div>
      </div>
    </Fragment>
  );
}
