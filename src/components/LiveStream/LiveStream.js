import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Slider from "react-slick";

import "./LiveStream.scss";

export default function LiveStream(props) {
  const liveStream = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  //creating the ref
  const customeSlider = React.createRef();

  const [sliderSettings, setSliderSettings] = useState(props.setting);

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  const renderLiveStream = () => {
    return liveStream.map((streamer, index) => {
      return (
        <div
          className="owl-item active"
          style={{ width: "274.533px", marginRight: 10 }}
        >
          <div className="item">
            <div className="stream_1" style={{ width: "90%" }}>
              <a href="live_output.html" className="stream_bg">
                <img src={`images/left-imgs/img-${index + 1}.jpg`} alt />
                <h4>John Doe</h4>
                <p>
                  live
                  <span />
                </p>
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="section3125 live_streams">
      <h4 className="item_title">Live Streams</h4>
      <NavLink to="/livestreams" className="see150">
        See all
      </NavLink>
      <div className="la5lo1">
        <div className="owl-carousel live_stream owl-theme owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transition: "all 0s ease 0s",
                width: "1200px",
              }}
            >
              <Slider {...sliderSettings} ref={customeSlider}>
                {renderLiveStream()}
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
    </div>
  );
}
