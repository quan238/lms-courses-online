import React from "react";
import { Link } from "react-router-dom";
import ManageCourse from "../../../components/Courses/InstructorCourse/ManageCourse";

export default function InstructorCourse() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="st_title">
            <i className="uil uil-book-alt" />
            Courses
          </h2>
        </div>
        <div className="col-md-12">
          <div className="card_dash1">
            <div className="card_dash_left1">
              <i className="uil uil-book-alt" />
              <h1>Jump Into Course Creation</h1>
            </div>
            <div className="card_dash_right1">
              <Link to="/create-new-courses">
                <button
                  className="create_btn_dash"
                  onclick="window.location.href = 'create_new_course.html';"
                >
                  Create Your Course
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="my_courses_tabs">
            <ul
              className="nav nav-pills my_crse_nav"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-my-courses-tab"
                  data-toggle="pill"
                  href="#pills-my-courses"
                  role="tab"
                  aria-controls="pills-my-courses"
                  aria-selected="true"
                >
                  <i className="uil uil-book-alt" />
                  My Courses
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-my-purchases-tab"
                  data-toggle="pill"
                  href="#pills-my-purchases"
                  role="tab"
                  aria-controls="pills-my-purchases"
                  aria-selected="false"
                >
                  <i className="uil uil-download-alt" />
                  My Purchases
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-promotions-tab"
                  data-toggle="pill"
                  href="#pills-promotions"
                  role="tab"
                  aria-controls="pills-promotions"
                  aria-selected="false"
                >
                  <i className="uil uil-megaphone" />
                  Promotions
                </a>
              </li>
            </ul>
            <ManageCourse></ManageCourse>
          </div>
        </div>
      </div>
    </div>
  );
}
