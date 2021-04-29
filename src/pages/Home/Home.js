import React, { Fragment } from "react";
import Card from "../../components/Card/Card";
import Courses from "../../components/Courses/Courses";
import Feedback from "../../components/Feedback/Feedback";
import LiveStream from "../../components/LiveStream/LiveStream";
import PopularInstructors from "../../components/Popular_Instructors/PopularInstructors";
import Info_rs from "../../components/RightSide/Info/Info_rs";
import LiveStreaming from "../../components/RightSide/LiveStreaming/LiveStreaming";
import Personalize from "../../components/RightSide/Personalize/Personalize";

import { settings2 } from "../../config/js/config";

export default function Home() {
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
              <Courses reverse={0}></Courses>
            </div>
            <div className="section3125 mt-30">
              <h4 class="item_title">Newest Courses</h4>
              <a href="#" class="see150">
                See all
              </a>
              <Courses reverse={1}> </Courses>
            </div>

            {/* card */}
            <Card></Card>
            {/* instructor */}
            <PopularInstructors />
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="right_side">
              <Info_rs></Info_rs>
              <LiveStreaming></LiveStreaming>
              <Personalize></Personalize>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12">
            <Feedback></Feedback>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
