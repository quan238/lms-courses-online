import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Info_rs() {
  // taiKhaon
  const taiKhoan = useSelector((state) => state.loginUserReducer.taiKhoan);

  return (
    <div className="fcrse_2 mb-30">
      <div className="tutor_img">
        {taiKhoan !== " " ? (
          <a href="my_instructor_profile_view.html">
            <img src="images/left-imgs/img-10.jpg" alt />
          </a>
        ) : (
          <NavLink to="/login">
            <img src="images/123.png" alt />
          </NavLink>
        )}
      </div>
      <div className="tutor_content_dt">
        <div className="tutor150">
          {taiKhoan !== " " ? (
            <Fragment>
              <a href="my_instructor_profile_view.html" className="tutor_name">
                {taiKhoan.hoTen}
              </a>
              <div className="mef78" title="Verify">
                <i className="uil uil-check-circle" />
              </div>
            </Fragment>
          ) : (
            <NavLink to="/login" className="tutor_name">
              Login
            </NavLink>
          )}
        </div>
        <div className="tutor_cate">
          Web Developer, Designer, and{" "}
          {taiKhoan.maLoaiNguoiDung === "HV" ? (
            <span>Student</span>
          ) : taiKhoan === " " ? (
            <span>User</span>
          ) : (
            <span>Teacher</span>
          )}
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
          <span className="vdt15">615K Students</span>
          <span className="vdt15">12 Courses</span>
        </div>
        <a href="my_instructor_profile_view.html" className="prfle12link">
          Go To Profile
        </a>
      </div>
    </div>
  );
}
