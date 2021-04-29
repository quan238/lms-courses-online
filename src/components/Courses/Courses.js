import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { settings } from "../../config/js/config";

import "./Courses.scss";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../redux/actions/type";

export default function Courses() {
  // slick slider == button

  //creating the ref
  const customeSlider = React.createRef();

  const [sliderSettings, setSliderSettings] = useState(settings);

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  // ========================================================

  // fetch API courses from getCourses Reducer

  // get reducer
  const Courses = useSelector((state) => {
    // console.log(state.getCoursesReducer.result);
    return state.getCoursesReducer.result;
  });

  const dispatch = useDispatch();

  // goi api
  useEffect(() => {
    dispatch(getCourses());
  }, []);

  const renderCourse = () => {
    return Courses.data?.map((course, index) => {
      return (
        <Fragment key={index}>
          <div
            className="owl-item"
            style={{ width: "385.56px", marginRight: 20 }}
          >
            <div className="item">
              <div className="fcrse_1 mb-20">
                <a href="course_detail_view.html" className="fcrse_img">
                  <img src={course.hinhAnh} alt />
                  <div className="course-overlay">
                    <div className="badge_seller">Bestseller</div>
                    <div className="crse_reviews">
                      <i className="uil uil-star" />
                      4.5
                    </div>
                    <span className="play_btn1">
                      <i className="uil uil-play" />
                    </span>
                    <div className="crse_timer">28 hours</div>
                  </div>
                </a>
                <div className="fcrse_content">
                  <div className="eps_dots more_dropdown">
                    <a href="#">
                      <i className="uil uil-ellipsis-v" />
                    </a>
                    <div className="dropdown-content">
                      <span>
                        <i className="uil uil-share-alt" />
                        Share
                      </span>
                      <span>
                        <i className="uil uil-heart" />
                        Save
                      </span>
                      <span>
                        <i className="uil uil-ban" />
                        Not Interested
                      </span>
                      <span>
                        <i className="uil uil-windsock" />
                        Report
                      </span>
                    </div>
                  </div>
                  <div className="vdtodt">
                    <span className="vdt14">{course.luotXem} views</span>
                    <span className="vdt14">15 days ago</span>
                  </div>
                  <a href="course_detail_view.html" className="crse14s">
                    {course.tenKhoaHoc}
                  </a>
                  <a href="#" className="crse-cate">
                    {course.danhMucKhoaHoc.maDanhMucKhoahoc} |{" "}
                    {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                  </a>
                  <div className="auth1lnkprce">
                    <p className="cr1fot">
                      By{" "}
                      <a href="#">
                        {course.nguoiTao.hoTen
                          ? course.nguoiTao.hoTen
                          : "admin"}
                      </a>
                    </p>
                    <div className="prce142">$5</div>
                    <button className="shrt-cart-btn" title="cart">
                      <i className="uil uil-shopping-cart-alt" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    });
  };
  return (
    <div className="la5lo1">
      <div className="owl-carousel featured_courses owl-theme owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transform: "translate3d(0px, 0px, 0px)",
              transition: "all 0s ease 0s",
              width: "1619px",
            }}
          >
            <Slider {...sliderSettings} ref={customeSlider}>
              {renderCourse()}
            </Slider>
          </div>
        </div>
        <div className="owl-nav">
          <button
            type="button"
            role="presentation"
            className="owl-prev disabled"
            onClick={() => gotoPrev()}
          >
            <i className="uil uil-angle-left" />
          </button>
          <button
            onClick={() => gotoNext()}
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
  );
}
