import React from "react";
import InstructorDashboard from "../../../components/Courses/Dashboard/InstructorDashboard";
import JumpCourseCreation from "../../../components/Courses/JumpCourseCreation/JumpCourseCreation";
import "./Dashboard.scss";

export default function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="st_title">
            <i className="uil uil-apps" /> Instructor Dashboard
          </h2>
        </div>
        <InstructorDashboard></InstructorDashboard>
        <JumpCourseCreation></JumpCourseCreation>
      </div>
      <div className="row dashboard">
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="section3125 mt-50">
            <h4 className="item_title">Latest Courses performance</h4>
            <div className="la5lo1">
              <div className="owl-carousel courses_performance owl-theme owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: "100%",
                    }}
                  >
                    <div>
                      <div className="item">
                        <div className="fcrse_1">
                          <a href="#" className="fcrse_img">
                            <img src="images/courses/img-1.jpg" alt />
                            <div className="course-overlay" />
                          </a>
                          <div className="fcrse_content">
                            <div className="vdtodt">
                              <span className="vdt14">
                                First 2 days 22 hours
                              </span>
                            </div>
                            <a href="#" className="crsedt145">
                              Complete Python Bootcamp: Go from zero to hero in
                              Python 3
                            </a>
                            <div className="allvperf">
                              <div className="crse-perf-left">View</div>
                              <div className="crse-perf-right">1.5k</div>
                            </div>
                            <div className="allvperf">
                              <div className="crse-perf-left">Purchased</div>
                              <div className="crse-perf-right">150</div>
                            </div>
                            <div className="allvperf">
                              <div className="crse-perf-left">Total Like</div>
                              <div className="crse-perf-right">1k</div>
                            </div>
                            <div className="auth1lnkprce">
                              <a href="#" className="cr1fot50">
                                Go to course analytics
                              </a>
                              <a href="#" className="cr1fot50">
                                See comments (875)
                              </a>
                              <a href="#" className="cr1fot50">
                                See Reviews (105)
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev disabled"
                  >
                    <i className="uil uil-angle-left" />
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="uil uil-angle-right" />
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="section3125 mt-50 ">
            <h4 className="item_title">News</h4>
            <div className="la5lo1">
              <div className="owl-carousel edututs_news owl-theme owl-loaded owl-drag">
                <div className="">
                  <div
                    className=""
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: "100%",
                    }}
                  >
                    <div className=" active">
                      <div className="item">
                        <div className="fcrse_1">
                          <a
                            href="#"
                            className="fcrse_img"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <img src="images/courses/news-1.jpg" alt />
                          </a>
                          <div className="fcrse_content">
                            <a href="#" className="crsedt145 mt-15">
                              COVID-19 Updates &amp; Resources
                            </a>
                            <p className="news_des45">
                              See the latest updates to coronavirus-related
                              content, including changes to monetization, and
                              access new Creator support resources
                            </p>
                            <div className="auth1lnkprce">
                              <a href="#" className="cr1fot50">
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev disabled"
                  >
                    <i className="uil uil-angle-left" />
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="uil uil-angle-right" />
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="section3125 mt-50">
            <h4 className="item_title">Profile Analytics</h4>
            <div className="la5lo1">
              <div className="fcrse_1">
                <div className="fcrse_content">
                  <h6 className="crsedt8145">Current subscribers</h6>
                  <h3 className="subcribe_title">856</h3>
                  <div className="allvperf">
                    <div className="crse-perf-left">View</div>
                    <div className="crse-perf-right">
                      17k
                      <span className="analyics_pr">
                        <i className="uil uil-arrow-to-bottom" />
                        75%
                      </span>
                    </div>
                  </div>
                  <div className="allvperf">
                    <div className="crse-perf-left">
                      Purchased<span className="per_text">(per hour)</span>
                    </div>
                    <div className="crse-perf-right">
                      1
                      <span className="analyics_pr">
                        <i className="uil uil-top-arrow-from-top" />
                        100%
                      </span>
                    </div>
                  </div>
                  <div className="allvperf">
                    <div className="crse-perf-left">
                      Enroll<span className="per_text">(per hour)</span>
                    </div>
                    <div className="crse-perf-right">
                      50
                      <span className="analyics_pr">
                        <i className="uil uil-top-arrow-from-top" />
                        70%
                      </span>
                    </div>
                  </div>
                  <div className="auth1lnkprce">
                    <a href="#" className="cr1fot50">
                      Go to profile analytics
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section3125 mt-50">
            <h4 className="item_title">Submit Courses</h4>
            <div className="la5lo1">
              <div className="fcrse_1">
                <div className="fcrse_content">
                  <div className="upcming_card">
                    <a href="#" className="crsedt145">
                      The Complete JavaScript Course 2020: Build Real Projects!
                      <span className="pndng_145">Pending</span>
                    </a>
                    <p className="submit-course">
                      Submitted<span>1 days ago</span>
                    </p>
                    <a href="#" className="delete_link10">
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section3125 mt-50">
            <h4 className="item_title">What's new in Edututs+</h4>
            <div className="la5lo1">
              <div className="fcrse_1">
                <div className="fcrse_content">
                  <a href="#" className="new_links10">
                    Improved performance on Studio Dashboard
                  </a>
                  <a href="#" className="new_links10">
                    See more Dashboard updates
                  </a>
                  <a href="#" className="new_links10">
                    See issues-at-glance for Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
