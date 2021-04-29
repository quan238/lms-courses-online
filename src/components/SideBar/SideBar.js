import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  let temp = "active";
  const [active, setActive] = useState(temp);

  return (
    <nav className="vertical_nav">
      <div className="left_section menu_left" id="js-menu">
        <div className="left_section">
          <ul>
            <li className="menu--item">
              <NavLink to="/home" className={`menu--link`} title="Home">
                <i className="uil uil-home-alt menu--icon" />
                <span className="menu--label">Home</span>
              </NavLink>
            </li>
            <li className="menu--item">
              <NavLink
                to="/livestreams"
                className="menu--link"
                title="Live Streams"
              >
                <i className="uil uil-kayak menu--icon" />
                <span className="menu--label">Live Streams</span>
              </NavLink>
            </li>
            <li className="menu--item">
              <NavLink to="/explore" className="menu--link" title="Explore">
                <i className="uil uil-search menu--icon" />
                <span className="menu--label">Explore</span>
              </NavLink>
            </li>
            <li className="menu--item menu--item__has_sub_menu">
              <label className="menu--link" title="Categories">
                <i className="uil uil-layers menu--icon" />
                <span className="menu--label">Categories</span>
              </label>
              <ul className="sub_menu">
                <li className="sub_menu--item">
                  <a href="#" className="sub_menu--link">
                    Development
                  </a>
                </li>
                <li className="sub_menu--item">
                  <a href="#" className="sub_menu--link">
                    Business
                  </a>
                </li>
                <li className="sub_menu--item">
                  <a href="#" className="sub_menu--link">
                    Finance &amp; Accounting
                  </a>
                </li>
                <li className="sub_menu--item">
                  <a href="#.html" className="sub_menu--link">
                    IT &amp; Software
                  </a>
                </li>
                <li className="sub_menu--item">
                  <a href="#" className="sub_menu--link">
                    Office Productivity
                  </a>
                </li>
                <li className="sub_menu--item">
                  <a href="#" className="sub_menu--link">
                    Personal Development
                  </a>
                </li>
                <li className="sub_menu--item">
                  <a href="#" className="sub_menu--link">
                    Design
                  </a>
                </li>
                <li className="sub_menu--item">
                  <a href="#" className="sub_menu--link">
                    Marketing
                  </a>
                </li>
                <li className="sub_menu--item">
                  <a href="#" className="sub_menu--link">
                    Lifestyle
                  </a>
                </li>
                <li className="sub_menu--item">
                  <a href="#" className="sub_menu--link">
                    Photography
                  </a>
                </li>
                <li className="sub_menu--item">
                  <a href="#" className="sub_menu--link">
                    Health &amp; Fitness
                  </a>
                </li>
                <li className="sub_menu--item">
                  <a href="#" className="sub_menu--link">
                    Music
                  </a>
                </li>
                <li className="sub_menu--item">
                  <a href="#" className="sub_menu--link">
                    Teaching &amp; Academics
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu--item">
              <NavLink
                to="/savecourses"
                className="menu--link"
                title="Saved Courses"
              >
                <i className="uil uil-heart-alt menu--icon" />
                <span className="menu--label">Saved Courses</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="left_section">
          <h6 className="left_title">SUBSCRIPTIONS</h6>
          <ul>
            <li className="menu--item">
              <a
                href="instructor_profile_view.html"
                className="menu--link user_img"
              >
                <img src="images/left-imgs/img-1.jpg" alt />
                Rock Smith
                <div className="alrt_dot" />
              </a>
            </li>
            <li className="menu--item">
              <a
                href="instructor_profile_view.html"
                className="menu--link user_img"
              >
                <img src="images/left-imgs/img-2.jpg" alt />
                Jassica William
              </a>
              <div className="alrt_dot" />
            </li>
            <li className="menu--item">
              <a
                href="all_instructor.html"
                className="menu--link"
                title="Browse Instructors"
              >
                <i className="uil uil-plus-circle menu--icon" />
                <span className="menu--label">Browse Instructors</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="left_section pt-2">
          <ul>
            <li className="menu--item">
              <a href="setting.html" className="menu--link" title="Setting">
                <i className="uil uil-cog menu--icon" />
                <span className="menu--label">Setting</span>
              </a>
            </li>
            <li className="menu--item">
              <a href="help.html" className="menu--link" title="Help">
                <i className="uil uil-question-circle menu--icon" />
                <span className="menu--label">Help</span>
              </a>
            </li>
            <li className="menu--item">
              <a
                href="report_history.html"
                className="menu--link"
                title="Report History"
              >
                <i className="uil uil-windsock menu--icon" />
                <span className="menu--label">Report History</span>
              </a>
            </li>
            <li className="menu--item">
              <a
                href="feedback.html"
                className="menu--link"
                title="Send Feedback"
              >
                <i className="uil uil-comment-alt-exclamation menu--icon" />
                <span className="menu--label">Send Feedback</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="left_footer">
          <ul>
            <li>
              <a href="about_us.html">About</a>
            </li>
            <li>
              <a href="press.html">Press</a>
            </li>
            <li>
              <a href="contact_us.html">Contact Us</a>
            </li>
            <li>
              <a href="coming_soon.html">Advertise</a>
            </li>
            <li>
              <a href="coming_soon.html">Developers</a>
            </li>
            <li>
              <a href="terms_of_use.html">Copyright</a>
            </li>
            <li>
              <a href="terms_of_use.html">Privacy Policy</a>
            </li>
            <li>
              <a href="terms_of_use.html">Terms</a>
            </li>
          </ul>
          <div className="left_footer_content">
            <p>
              © 2020 <strong>Cursus</strong>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
