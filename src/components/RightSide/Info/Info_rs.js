import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./Info_rs.scss";

export default function Info_rs() {
  // taiKhaon
  const taiKhoan = useSelector((state) => state.loginUserReducer.taiKhoan);

  return (
    <div className="fcrse_2 mb-30 info_rs">
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
            <NavLink to="/login" className="tutor_name text-primary tutor_name_active">
              Login
            </NavLink>
          )}
        </div>
        <div className="tutor_cate">
          {taiKhoan.maLoaiNguoiDung === "HV" ? (
            <span> Web Developer, Designer, and Student</span>
          ) : taiKhoan === " " ? (
            <span></span>
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
        {taiKhoan !== " " ? (
          <Fragment>
            <div className="tut1250">
              <span className="vdt15">615K Students</span>
              <span className="vdt15">12 Courses</span>
            </div>
            <a href="my_instructor_profile_view.html" className="prfle12link">
              Go To Profile
            </a>
          </Fragment>
        ) : (
          <a></a>
        )}
      </div>
    </div>
  );
}
