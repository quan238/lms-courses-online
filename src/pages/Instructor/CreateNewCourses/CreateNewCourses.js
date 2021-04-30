import React from "react";
import General from "./General/General";

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
              <ul className="step-steps">
                <li className="active">
                  <a href="#tab_step1">
                    <span className="number" />
                    <span className="step-name">General Information</span>
                  </a>
                </li>
                <li>
                  <a href="#tab_step2">
                    <span className="number" />
                    <span className="step-name">View</span>
                  </a>
                </li>
                <li>
                  <a href="#tab_step3">
                    <span className="number" />
                    <span className="step-name">Course Content</span>
                  </a>
                </li>
                <li>
                  <a href="#tab_step4">
                    <span className="number" />
                    <span className="step-name">Extra Information</span>
                  </a>
                </li>
              </ul>
              <div className="step-content">
                <General></General>
              </div>
              <div className="step-footer step-tab-pager">
                <button
                  data-direction="prev"
                  className="btn btn-default steps_btn"
                >
                  PREVIOUS
                </button>
                <button
                  data-direction="next"
                  className="btn btn-default steps_btn"
                >
                  Next
                </button>
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
