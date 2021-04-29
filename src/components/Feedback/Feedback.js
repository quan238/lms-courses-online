import React, { useState } from "react";
import { settings4 } from "../../config/js/config";
import Slider from "react-slick";

export default function Feedback() {
  const feedbackStudent = [1, 2, 3, 4, 5];

  //creating the ref
  const customeSlider = React.createRef();

  const [sliderSettings, setSliderSettings] = useState(settings4);

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  const renderFeedback = () => {
    return feedbackStudent.map((feedback, index) => {
      return (
        <div className="item">
          <div className="fcrse_4 mb-20" style={{ width: "95%" }}>
            <div className="say_content">
              <p>
                "Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero
                quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam.
                Nunc consectetur malesuada bibendum."
              </p>
            </div>
            <div className="st_group">
              <div className="stud_img">
                <img src="images/left-imgs/img-1.jpg" alt />
              </div>
              <h4>Rock Smith</h4>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="section3125 mt-30">
      <h4 className="item_title">What Our Student Have Today</h4>
      <div className="la5lo1">
        <div className="owl-carousel Student_says owl-theme owl-loaded owl-drag">
          <Slider {...sliderSettings} ref={customeSlider}>
            {renderFeedback()}
          </Slider>
        </div>
      </div>
    </div>
  );
}
