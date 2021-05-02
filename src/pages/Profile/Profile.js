import React, { Fragment } from "react";
import BannerProfile from "../../components/BannerProfile/BannerProfile";
import ProfileCourse from "../../components/BannerProfile/ProfileCourse/ProfileCourse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

export default function Profile() {
  return (
    <Fragment>
      <BannerProfile />
      <div className="_215b15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="course_tabs">
                <nav>
                  <div
                    className="nav nav-tabs tab_crse"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      id="nav-about-tab"
                      data-toggle="tab"
                      href="#nav-about"
                      role="tab"
                      aria-selected="true"
                    >
                      About
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-courses-tab"
                      data-toggle="tab"
                      href="#nav-courses"
                      role="tab"
                      aria-selected="false"
                    >
                      Courses
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-reviews-tab"
                      data-toggle="tab"
                      href="#nav-reviews"
                      role="tab"
                      aria-selected="false"
                    >
                      Discussion
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-subscriptions-tab"
                      data-toggle="tab"
                      href="#nav-subscriptions"
                      role="tab"
                      aria-selected="false"
                    >
                      Subscriptions
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileCourse></ProfileCourse>
    </Fragment>
  );
}
