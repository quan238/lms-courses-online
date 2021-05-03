import React from "react";
import { Link } from "react-router-dom";

export default function JumpCourseCreation() {
  return (
    <div className="col-md-12">
      <div className="card_dash1">
        <div className="card_dash_left1">
          <i className="uil uil-book-alt" />
          <h1>Jump Into Course Creation</h1>
        </div>
        <div className="card_dash_right1">
          <Link to="/create-new-courses">
            <button
              className="create_btn_dash"
              onclick="window.location.href = 'create_new_course.html';"
            >
              Create Your Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
