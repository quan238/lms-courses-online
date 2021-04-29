import React, { Fragment } from "react";
import LiveStream from "../../components/LiveStream/LiveStream";

import { settings3} from "../../config/js/config";

export default function Explore() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-8">
            <div className="section3125">
              <div className="explore_search">
                <div className="ui search focus">
                  <div className="ui left icon input swdh11">
                    <input
                      className="prompt srch_explore"
                      type="text"
                      placeholder="Search for Tuts Videos, Tutors, Tests and more.."
                    />
                    <i className="uil uil-search-alt icon icon2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 ">
              <div className="mb-15 mt-50">
            <LiveStream
              setting={settings3}
              
            ></LiveStream>
            </div>
          </div>
          <div className="col-md-12">
            <div className="_14d25">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <div className="fcrse_1 mt-30">
                    <a href="course_detail_view.html" className="fcrse_img">
                      <img src="images/courses/img-1.jpg" alt />
                      <div className="course-overlay">
                        <div className="badge_seller">Bestseller</div>
                        <div className="crse_reviews">
                          <i className="uil uil-star" />
                          4.5
                        </div>
                        <span className="play_btn1">
                          <i className="uil uil-play" />
                        </span>
                        <div className="crse_timer">25 hours</div>
                      </div>
                    </a>
                    <div className="fcrse_content">
                      <div className="eps_dots more_dropdown">
                        <a href="#">
                          <i className="uil uil-ellipsis-v" />
                        </a>
                        <div className="dropdown-content">
                          <span>
                            <i className="uil uil-share-alt" />
                            Share
                          </span>
                          <span>
                            <i className="uil uil-heart" />
                            Save
                          </span>
                          <span>
                            <i className="uil uil-ban" />
                            Not Interested
                          </span>
                          <span>
                            <i className="uil uil-windsock" />
                            Report
                          </span>
                        </div>
                      </div>
                      <div className="vdtodt">
                        <span className="vdt14">109k views</span>
                        <span className="vdt14">15 days ago</span>
                      </div>
                      <a href="course_detail_view.html" className="crse14s">
                        Complete Python Bootcamp: Go from zero to hero in Python
                        3
                      </a>
                      <a href="#" className="crse-cate">
                        Web Development | Python
                      </a>
                      <div className="auth1lnkprce">
                        <p className="cr1fot">
                          By <a href="#">John Doe</a>
                        </p>
                        <div className="prce142">$10</div>
                        <button className="shrt-cart-btn" title="cart">
                          <i className="uil uil-shopping-cart-alt" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="fcrse_1 mt-30">
                    <a href="course_detail_view.html" className="fcrse_img">
                      <img src="images/courses/img-2.jpg" alt />
                      <div className="course-overlay">
                        <div className="badge_seller">Bestseller</div>
                        <div className="crse_reviews">
                          <i className="uil uil-star" />
                          4.5
                        </div>
                        <span className="play_btn1">
                          <i className="uil uil-play" />
                        </span>
                        <div className="crse_timer">28 hours</div>
                      </div>
                    </a>
                    <div className="fcrse_content">
                      <div className="eps_dots more_dropdown">
                        <a href="#">
                          <i className="uil uil-ellipsis-v" />
                        </a>
                        <div className="dropdown-content">
                          <span>
                            <i className="uil uil-share-alt" />
                            Share
                          </span>
                          <span>
                            <i className="uil uil-heart" />
                            Save
                          </span>
                          <span>
                            <i className="uil uil-ban" />
                            Not Interested
                          </span>
                          <span>
                            <i className="uil uil-windsock" />
                            Report
                          </span>
                        </div>
                      </div>
                      <div className="vdtodt">
                        <span className="vdt14">5M views</span>
                        <span className="vdt14">15 days ago</span>
                      </div>
                      <a href="course_detail_view.html" className="crse14s">
                        The Complete JavaScript Course 2020: Build Real
                        Projects!
                      </a>
                      <a href="#" className="crse-cate">
                        Development | JavaScript
                      </a>
                      <div className="auth1lnkprce">
                        <p className="cr1fot">
                          By <a href="#">Jassica William</a>
                        </p>
                        <div className="prce142">$5</div>
                        <button className="shrt-cart-btn" title="cart">
                          <i className="uil uil-shopping-cart-alt" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="fcrse_1 mt-30">
                    <a href="course_detail_view.html" className="fcrse_img">
                      <img src="images/courses/img-20.jpg" alt />
                      <div className="course-overlay">
                        <div className="crse_reviews">
                          <i className="uil uil-star" />
                          5.0
                        </div>
                        <span className="play_btn1">
                          <i className="uil uil-play" />
                        </span>
                        <div className="crse_timer">21 hours</div>
                      </div>
                    </a>
                    <div className="fcrse_content">
                      <div className="eps_dots more_dropdown">
                        <a href="#">
                          <i className="uil uil-ellipsis-v" />
                        </a>
                        <div className="dropdown-content">
                          <span>
                            <i className="uil uil-share-alt" />
                            Share
                          </span>
                          <span>
                            <i className="uil uil-heart" />
                            Save
                          </span>
                          <span>
                            <i className="uil uil-ban" />
                            Not Interested
                          </span>
                          <span>
                            <i className="uil uil-windsock" />
                            Report
                          </span>
                        </div>
                      </div>
                      <div className="vdtodt">
                        <span className="vdt14">200 Views</span>
                        <span className="vdt14">4 days ago</span>
                      </div>
                      <a href="course_detail_view.html" className="crse14s">
                        WordPress Development - Themes, Plugins &amp; Gutenberg
                      </a>
                      <a href="#" className="crse-cate">
                        Design | Wordpress
                      </a>
                      <div className="auth1lnkprce">
                        <p className="cr1fot">
                          By <a href="#">Joy Dua</a>
                        </p>
                        <div className="prce142">$14</div>
                        <button className="shrt-cart-btn" title="cart">
                          <i className="uil uil-shopping-cart-alt" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="fcrse_1 mt-30">
                    <a href="course_detail_view.html" className="fcrse_img">
                      <img src="images/courses/img-4.jpg" alt />
                      <div className="course-overlay">
                        <div className="badge_seller">Bestseller</div>
                        <div className="crse_reviews">
                          <i className="uil uil-star" />
                          5.0
                        </div>
                        <span className="play_btn1">
                          <i className="uil uil-play" />
                        </span>
                        <div className="crse_timer">1 hour</div>
                      </div>
                    </a>
                    <div className="fcrse_content">
                      <div className="eps_dots more_dropdown">
                        <a href="#">
                          <i className="uil uil-ellipsis-v" />
                        </a>
                        <div className="dropdown-content">
                          <span>
                            <i className="uil uil-share-alt" />
                            Share
                          </span>
                          <span>
                            <i className="uil uil-heart" />
                            Save
                          </span>
                          <span>
                            <i className="uil uil-ban" />
                            Not Interested
                          </span>
                          <span>
                            <i className="uil uil-windsock" />
                            Report
                          </span>
                        </div>
                      </div>
                      <div className="vdtodt">
                        <span className="vdt14">153k views</span>
                        <span className="vdt14">3 months ago</span>
                      </div>
                      <a href="course_detail_view.html" className="crse14s">
                        The Complete Digital Marketing Course - 12 Courses in 1
                      </a>
                      <a href="#" className="crse-cate">
                        Digital Marketing | Marketing
                      </a>
                      <div className="auth1lnkprce">
                        <p className="cr1fot">
                          By <a href="#">Poonam Verma</a>
                        </p>
                        <div className="prce142">$12</div>
                        <button className="shrt-cart-btn" title="cart">
                          <i className="uil uil-shopping-cart-alt" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="fcrse_1 mt-30">
                    <a href="course_detail_view.html" className="fcrse_img">
                      <img src="images/courses/img-13.jpg" alt />
                      <div className="course-overlay">
                        <span className="play_btn1">
                          <i className="uil uil-play" />
                        </span>
                        <div className="crse_timer">30 hours</div>
                      </div>
                    </a>
                    <div className="fcrse_content">
                      <div className="eps_dots more_dropdown">
                        <a href="#">
                          <i className="uil uil-ellipsis-v" />
                        </a>
                        <div className="dropdown-content">
                          <span>
                            <i className="uil uil-share-alt" />
                            Share
                          </span>
                          <span>
                            <i className="uil uil-heart" />
                            Save
                          </span>
                          <span>
                            <i className="uil uil-ban" />
                            Not Interested
                          </span>
                          <span>
                            <i className="uil uil-windsock" />
                            Report
                          </span>
                        </div>
                      </div>
                      <div className="vdtodt">
                        <span className="vdt14">20 Views</span>
                        <span className="vdt14">1 day ago</span>
                      </div>
                      <a href="course_detail_view.html" className="crse14s">
                        The Complete Node.js Developer Course (3rd Edition)
                      </a>
                      <a href="#" className="crse-cate">
                        Development | Node.js
                      </a>
                      <div className="auth1lnkprce">
                        <p className="cr1fot">
                          By <a href="#">John Doe</a>
                        </p>
                        <div className="prce142">$3</div>
                        <button className="shrt-cart-btn" title="cart">
                          <i className="uil uil-shopping-cart-alt" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="fcrse_1 mt-30">
                    <a href="course_detail_view.html" className="fcrse_img">
                      <img src="images/courses/img-7.jpg" alt />
                      <div className="course-overlay">
                        <div className="badge_seller">Bestseller</div>
                        <div className="crse_reviews">
                          <i className="uil uil-star" />
                          5.0
                        </div>
                        <span className="play_btn1">
                          <i className="uil uil-play" />
                        </span>
                        <div className="crse_timer">5.4 hours</div>
                      </div>
                    </a>
                    <div className="fcrse_content">
                      <div className="eps_dots more_dropdown">
                        <a href="#">
                          <i className="uil uil-ellipsis-v" />
                        </a>
                        <div className="dropdown-content">
                          <span>
                            <i className="uil uil-share-alt" />
                            Share
                          </span>
                          <span>
                            <i className="uil uil-heart" />
                            Save
                          </span>
                          <span>
                            <i className="uil uil-ban" />
                            Not Interested
                          </span>
                          <span>
                            <i className="uil uil-windsock" />
                            Report
                          </span>
                        </div>
                      </div>
                      <div className="vdtodt">
                        <span className="vdt14">109k views</span>
                        <span className="vdt14">15 days ago</span>
                      </div>
                      <a href="course_detail_view.html" className="crse14s">
                        WordPress for Beginners: Create a Website Step by Step
                      </a>
                      <a href="#" className="crse-cate">
                        Design | Wordpress
                      </a>
                      <div className="auth1lnkprce">
                        <p className="cr1fot">
                          By <a href="#">Sabnam SIngh</a>
                        </p>
                        <div className="prce142">$18</div>
                        <button className="shrt-cart-btn" title="cart">
                          <i className="uil uil-shopping-cart-alt" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="fcrse_1 mt-30">
                    <a href="course_detail_view.html" className="fcrse_img">
                      <img src="images/courses/img-8.jpg" alt />
                      <div className="course-overlay">
                        <div className="badge_seller">Bestseller</div>
                        <div className="crse_reviews">
                          <i className="uil uil-star" />
                          4.0
                        </div>
                        <span className="play_btn1">
                          <i className="uil uil-play" />
                        </span>
                        <div className="crse_timer">23 hours</div>
                      </div>
                    </a>
                    <div className="fcrse_content">
                      <div className="eps_dots more_dropdown">
                        <a href="#">
                          <i className="uil uil-ellipsis-v" />
                        </a>
                        <div className="dropdown-content">
                          <span>
                            <i className="uil uil-share-alt" />
                            Share
                          </span>
                          <span>
                            <i className="uil uil-heart" />
                            Save
                          </span>
                          <span>
                            <i className="uil uil-ban" />
                            Not Interested
                          </span>
                          <span>
                            <i className="uil uil-windsock" />
                            Report
                          </span>
                        </div>
                      </div>
                      <div className="vdtodt">
                        <span className="vdt14">196k views</span>
                        <span className="vdt14">1 month ago</span>
                      </div>
                      <a href="course_detail_view.html" className="crse14s">
                        CSS - The Complete Guide 2020 (incl. Flexbox, Grid &amp;
                        Sass)
                      </a>
                      <a href="#" className="crse-cate">
                        Design | CSS
                      </a>
                      <div className="auth1lnkprce">
                        <p className="cr1fot">
                          By <a href="#">Jashanpreet Singh</a>
                        </p>
                        <div className="prce142">$10</div>
                        <button className="shrt-cart-btn" title="cart">
                          <i className="uil uil-shopping-cart-alt" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="fcrse_1 mt-30">
                    <a href="#" className="fcrse_img">
                      <img src="images/courses/img-16.jpg" alt />
                      <div className="course-overlay">
                        <span className="play_btn1">
                          <i className="uil uil-play" />
                        </span>
                        <div className="crse_timer">22 hours</div>
                      </div>
                    </a>
                    <div className="fcrse_content">
                      <div className="eps_dots more_dropdown">
                        <a href="#">
                          <i className="uil uil-ellipsis-v" />
                        </a>
                        <div className="dropdown-content">
                          <span>
                            <i className="uil uil-share-alt" />
                            Share
                          </span>
                          <span>
                            <i className="uil uil-heart" />
                            Save
                          </span>
                          <span>
                            <i className="uil uil-ban" />
                            Not Interested
                          </span>
                          <span>
                            <i className="uil uil-windsock" />
                            Report
                          </span>
                        </div>
                      </div>
                      <div className="vdtodt">
                        <span className="vdt14">11 Views</span>
                        <span className="vdt14">5 Days ago</span>
                      </div>
                      <a href="course_detail_view.html" className="crse14s">
                        Vue JS 2 - The Complete Guide (incl. Vue Router &amp;
                        Vuex)
                      </a>
                      <a href="#" className="crse-cate">
                        Development | Vue JS
                      </a>
                      <div className="auth1lnkprce">
                        <p className="cr1fot">
                          By <a href="#">Manreet Kaur</a>
                        </p>
                        <div className="prce142">$10</div>
                        <button className="shrt-cart-btn" title="cart">
                          <i className="uil uil-shopping-cart-alt" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="main-loader mt-50">
                    <div className="spinner">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
