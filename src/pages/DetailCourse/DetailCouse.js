import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutCourse from "../../components/Courses/Detail/About/AboutCourse";
import BannerCourse from "../../components/Courses/Detail/BannerCourse/BannerCourse";
import ContentCourse from "../../components/Courses/Detail/Content/ContentCourse";
import ReviewCourse from "../../components/Courses/Detail/Reviews/ReviewCourse";
import { getDetailCourse } from "../../redux/actions/type";

export default function DetailCouse(props) {
  // redux
  const dispatch = useDispatch();

  const detailCourse = useSelector(
    (state) => state.getCoursesReducer.detailCourse
  );

  useEffect(() => {
    let { id } = props.match.params;
    // action
    console.log(id);
    dispatch(getDetailCourse(id));
  }, []);

  return (
    <Fragment>
      <BannerCourse detailCourse={detailCourse}></BannerCourse>
      <div className="_215b15 _byt1458">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="user_dt5">
                <div className="user_dt_left">
                  <div className="live_user_dt">
                    <div className="user_img5">
                      <a href="#">
                        <img src="images/left-imgs/img-1.jpg" alt />
                      </a>
                    </div>
                    <div className="user_cntnt">
                      <a href="#" className="_df7852">
                        {detailCourse.nguoiTao ? (
                          detailCourse.nguoiTao.hoTen
                        ) : (
                          <span>default</span>
                        )}
                      </a>
                      <button className="subscribe-btn">Subscribe</button>
                    </div>
                  </div>
                </div>
                <div className="user_dt_right">
                  <ul>
                    <li>
                      <a href="#" className="lkcm152">
                        <i className="uil uil-eye" />
                        <span>1452</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="lkcm152">
                        <i className="uil uil-thumbs-up" />
                        <span>100</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="lkcm152">
                        <i className="uil uil-thumbs-down" />
                        <span>20</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="lkcm152">
                        <i className="uil uil-share-alt" />
                        <span>9</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="course_tabs">
                <nav>
                  <div
                    className="nav nav-tabs tab_crse justify-content-center"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link"
                      id="nav-about-tab"
                      data-toggle="tab"
                      href="#nav-about"
                      role="tab"
                      aria-selected="false"
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
                      Courses Content
                    </a>
                    <a
                      className="nav-item nav-link active"
                      id="nav-reviews-tab"
                      data-toggle="tab"
                      href="#nav-reviews"
                      role="tab"
                      aria-selected="true"
                    >
                      Reviews
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="course_tab_content">
              <div class="tab-content" id="nav-tabContent">
                <AboutCourse></AboutCourse>
                <ContentCourse></ContentCourse>
                <ReviewCourse></ReviewCourse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
