import React from "react";
import General from "./General/General";
import View from "./View/View";
import Content from "./Content/Content";
import Information from "./Information/Information";

import "./CreateNewCourses.scss";

export default function CreateNewCourses() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="st_title">
            <i className="uil uil-analysis" /> Create New Course
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="course_tabs_1">
            <div id="add-course-tab" className="step-app">
              <ul class="nav nav-tabs step-steps" id="myTab" role="tablist">
                <li class="nav-item active ">
                  <a
                    class="nav-link active "
                    id="home-tab"
                    data-toggle="tab"
                    href="#general"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <span className="number" />
                    <span className="step-name">General Information</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#view"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <span className="number" />
                    <span className="step-name">View</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#content"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    <span className="number" />
                    <span className="step-name">COURSE CONTENT</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#information"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    <span className="number" />
                    <span className="step-name">EXTRA Information</span>
                  </a>
                </li>
              </ul>

              <div className="step-content tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="general"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <General></General>
                </div>
                <div
                  class="tab-pane fade"
                  id="view"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <View></View>
                </div>
                {/* <div
                  class="tab-pane fade"
                  id="content"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <Content></Content>
                </div>*/}
                <div
                  class="tab-pane fade"
                  id="information"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <Information></Information>
                </div>
              </div>
              <div
                className="step-footer step-tab-pager"
                style={{ justifyContent: "flex-end" }}
              >
                <button
                  data-direction="finish"
                  className="btn btn-default steps_btn"
                >
                  Submit for Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
