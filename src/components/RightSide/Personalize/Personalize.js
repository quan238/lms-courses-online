import React, { Fragment } from "react";

export default function Personalize() {
  return (
    <Fragment>
      <div>
        <div className="get1452">
          <h4>Get personalized recommendations</h4>
          <p>Answer a few questions for your top picks</p>
          <button className="Get_btn" onclick="window.location.href = '#';">
            Get Started
          </button>
        </div>
        <div className="fcrse_3">
          <div className="cater_ttle">
            <h4>Top Categories</h4>
          </div>
          <ul className="allcate15">
            <li>
              <a href="#" className="ct_item">
                <i className="uil uil-arrow" />
                Development
              </a>
            </li>
            <li>
              <a href="#" className="ct_item">
                <i className="uil uil-graph-bar" />
                Business
              </a>
            </li>
            <li>
              <a href="#" className="ct_item">
                <i className="uil uil-monitor" />
                IT and Software
              </a>
            </li>
            <li>
              <a href="#" className="ct_item">
                <i className="uil uil-ruler" />
                Design
              </a>
            </li>
            <li>
              <a href="#" className="ct_item">
                <i className="uil uil-chart-line" />
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="ct_item">
                <i className="uil uil-book-open" />
                Personal Development
              </a>
            </li>
            <li>
              <a href="#" className="ct_item">
                <i className="uil uil-camera" />
                Photography
              </a>
            </li>
            <li>
              <a href="#" className="ct_item">
                <i className="uil uil-music" />
                Music
              </a>
            </li>
          </ul>
        </div>
        <div className="strttech120">
          <h4>Become an Instructor</h4>
          <p>
            Top instructors from around the world teach millions of students on
            Cursus. We provide the tools and skills to teach what you love.
          </p>
          <button className="Get_btn" onclick="window.location.href = '#';">
            Start Teaching
          </button>
        </div>
      </div>
    </Fragment>
  );
}
