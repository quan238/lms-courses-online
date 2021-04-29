import React, { useState } from "react";
import Slider from "react-slick";
import { settings } from "../../config/js/config";

export default function PopularInstructors(props) {
  const instructor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
  const renderInstructor = () => {
    return instructor.map((teacher, index) => {
      return (
        <div className="item">
          <div className="fcrse_1 mb-20" style={{ width: "95%" }}>
            <div className="tutor_img">
              <a href="instructor_profile_view.html">
                <img src={`images/left-imgs/img-${index + 1}.jpg`} alt />
              </a>
            </div>
            <div className="tutor_content_dt">
              <div className="tutor150">
                <a href="instructor_profile_view.html" className="tutor_name">
                  Kerstin Cable
                </a>
                <div className="mef78" title="Verify">
                  <i className="uil uil-check-circle" />
                </div>
              </div>
              <div className="tutor_cate">
                Language Learning Coach, Writer, Online Tutor
              </div>
              <ul className="tutor_social_links">
                <li>
                  <a href="#" className="fb">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" className="tw">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="ln">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#" className="yu">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
              <div className="tut1250">
                <span className="vdt15">14K Students</span>
                <span className="vdt15">11 Courses</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="section3125 mt-50">
      <h4 className="item_title">Popular Instructors</h4>
      <a href="all_instructor.html" className="see150">
        See all
      </a>
      <div className="la5lo1">
        <div className="owl-carousel top_instrutors owl-theme owl-loaded ">
          <Slider {...sliderSettings} ref={customeSlider}>
            {renderInstructor()}
          </Slider>
        </div>
      </div>
    </div>
  );
}
