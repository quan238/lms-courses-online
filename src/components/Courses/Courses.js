import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import settings from "../../config/js/config";

import "./Courses.scss";

export default function Courses() {
  const courses = { data: [1, 2, 3, 5, 6, 7] };

  //creating the ref
  const customeSlider = React.createRef();

  const [sliderSettings, setSliderSettings] = useState(settings);

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  const renderCourse = () => {
    return courses.data?.map((course, index) => {
      return (
        <Fragment key={index}>
          <div className="owl-item" style={{ width: 538, marginRight: 20 }}>
            <div className="item">
              <div className="fcrse_1 mb-20">
                <a href="course_detail_view.html" className="fcrse_img">
                  <img src="images/courses/img-2.jpg" alt />
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
                    <span className="vdt14">5M views</span>
                    <span className="vdt14">15 days ago</span>
                  </div>
                  <a href="course_detail_view.html" className="crse14s">
                    The Complete JavaScript Course 2020: Build Real Projects!
                  </a>
                  <a href="#" className="crse-cate">
                    Development | JavaScript
                  </a>
                  <div className="auth1lnkprce">
                    <p className="cr1fot">
                      By <a href="#">Jassica William</a>
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
              width: "2264px",
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
