import React from "react";

export default function LiveStreaming() {
  return (
    <div className="fcrse_3">
      <div className="cater_ttle">
        <h4>Live Streaming</h4>
      </div>
      <div className="live_text">
        <div className="live_icon">
          <i className="uil uil-kayak" />
        </div>
        <div className="live-content">
          <p>Set up your channel and stream live to your students</p>
          <button
            className="live_link"
            onclick="window.location.href = 'add_streaming.html';"
          >
            Get Started
          </button>
          <span className="livinfo">
            Info : This feature only for 'Instructors'.
          </span>
        </div>
      </div>
    </div>
  );
}
