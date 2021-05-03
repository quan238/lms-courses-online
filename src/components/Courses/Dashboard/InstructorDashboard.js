import React, { Fragment } from "react";

export default function InstructorDashboard() {
  return (
    <Fragment>
      <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="card_dash">
          <div className="card_dash_left">
            <h5>Total Sales</h5>
            <h2>$350</h2>
            <span className="crdbg_1">New $50</span>
          </div>
          <div className="card_dash_right">
            <img src="images/dashboard/achievement.svg" alt />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="card_dash">
          <div className="card_dash_left">
            <h5>Total Enroll</h5>
            <h2>1500</h2>
            <span className="crdbg_2">New 125</span>
          </div>
          <div className="card_dash_right">
            <img src="images/dashboard/graduation-cap.svg" alt />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="card_dash">
          <div className="card_dash_left">
            <h5>Total Courses</h5>
            <h2>130</h2>
            <span className="crdbg_3">New 5</span>
          </div>
          <div className="card_dash_right">
            <img src="images/dashboard/online-course.svg" alt />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="card_dash">
          <div className="card_dash_left">
            <h5>Total Students</h5>
            <h2>2650</h2>
            <span className="crdbg_4">New 245</span>
          </div>
          <div className="card_dash_right">
            <img src="images/dashboard/knowledge.svg" alt />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
