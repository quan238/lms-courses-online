import React from "react";
import "./Streaming.scss";

export default function Streaming() {
  return (
    <div className="section3125">
      <div className="live1452">
        <iframe
          src="https://www.youtube.com/embed/EEIk7gwjgIM?autoplay=1"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="user_dt5">
        <div className="user_dt_left">
          <div className="live_user_dt">
            <div className="user_img5">
              <img src="images/left-imgs/img-4.jpg" alt />
            </div>
            <div className="user_cntnt">
              <h4>Jassica William</h4>
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="user_dt_right">
          <ul>
            <li>
              <a href="#" className="lkcm152">
                <i className="fa fa-eye" />
                <span>1452</span>
              </a>
            </li>
            <li>
              <a href="#" className="lkcm152">
                <i className="fa fa-thumbs-up" />
                <span>100</span>
              </a>
            </li>
            <li>
              <a href="#" className="lkcm152">
                <i className="fa fa-thumbs-down" />
                <span>20</span>
              </a>
            </li>
            <li>
              <a href="#" className="lkcm152">
                <i className="fa fa-share-alt" />
                <span>9</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
