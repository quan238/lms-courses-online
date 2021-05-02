import React from "react";
import { useSelector } from "react-redux";

export default function BannerProfile() {
  const taiKhoan = useSelector((state) => state.loginUserReducer.taiKhoan);

  console.log(taiKhoan);


  return (
    <div className="_216b01">
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <div className="section3125 rpt145">
              <div className="row">
                <div className="col-lg-7">
                  <a href="#" className="_216b22">
                    <span>
                      <i className="uil uil-cog" />
                    </span>
                    Setting
                  </a>
                  <div className="dp_dt150">
                    <div className="img148">
                      <img src="images/hd_dp.jpg" alt />
                    </div>
                    <div className="prfledt1">
                      <h2>{taiKhoan.taiKhoan}</h2>
                      {taiKhoan.maLoaiNguoiDung === "GV" ? (
                        <span>UI / UX Designer, Web Developer and Teacher</span>
                      ) : (
                        <span>UI / UX Designer, Web Developer and Student</span>
                      )}
                    </div>
                  </div>
                  <ul className="_ttl120">
                    <li>
                      <div className="_ttl121">
                        <div className="_ttl122">Enroll Students</div>
                        <div className="_ttl123">612K</div>
                      </div>
                    </li>
                    <li>
                      <div className="_ttl121">
                        <div className="_ttl122">Courses</div>
                        <div className="_ttl123">8</div>
                      </div>
                    </li>
                    <li>
                      <div className="_ttl121">
                        <div className="_ttl122">Reviews</div>
                        <div className="_ttl123">11K</div>
                      </div>
                    </li>
                    <li>
                      <div className="_ttl121">
                        <div className="_ttl122">Subscriptions</div>
                        <div className="_ttl123">452K</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-5">
                  <a href="setting.html" className="_216b12">
                    <span>
                      <i className="uil uil-cog" />
                    </span>
                    Setting
                  </a>
                  <div className="rgt-145">
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
                  </div>
                  <ul className="_bty149">
                    <li>
                      <button
                        className="studio-link-btn btn500"
                        onclick="window.location.href = 'instructor_dashboard.html';"
                      >
                        Cursus Studio
                      </button>
                    </li>
                    <li>
                      <button
                        className="msg125 btn500"
                        onclick="window.location.href = 'setting.html';"
                      >
                        Edit
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
