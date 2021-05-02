import React from "react";

export default function ReviewCourse() {
  return (
    <div className="tab-pane fade" id="nav-reviews" role="tabpanel">
      <div className="student_reviews">
        <div className="row">
          <div className="col-lg-5">
            <div className="reviews_left">
              <h3>Student Feedback</h3>
              <div className="total_rating">
                <div className="_rate001">4.6</div>
                <div className="rating-box">
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star half-star" />
                </div>
                <div className="_rate002">Course Rating</div>
              </div>
              <div className="_rate003">
                <div className="_rate004">
                  <div className="progress progress1">
                    <div
                      className="progress-bar w-70"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="rating-box">
                    <span className="rating-star full-star" />
                    <span className="rating-star full-star" />
                    <span className="rating-star full-star" />
                    <span className="rating-star full-star" />
                    <span className="rating-star full-star" />
                  </div>
                  <div className="_rate002">70%</div>
                </div>
                <div className="_rate004">
                  <div className="progress progress1">
                    <div
                      className="progress-bar w-30"
                      role="progressbar"
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="rating-box">
                    <span className="rating-star full-star" />
                    <span className="rating-star full-star" />
                    <span className="rating-star full-star" />
                    <span className="rating-star full-star" />
                    <span className="rating-star empty-star" />
                  </div>
                  <div className="_rate002">40%</div>
                </div>
                <div className="_rate004">
                  <div className="progress progress1">
                    <div
                      className="progress-bar w-5"
                      role="progressbar"
                      aria-valuenow={10}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="rating-box">
                    <span className="rating-star full-star" />
                    <span className="rating-star full-star" />
                    <span className="rating-star full-star" />
                    <span className="rating-star empty-star" />
                    <span className="rating-star empty-star" />
                  </div>
                  <div className="_rate002">5%</div>
                </div>
                <div className="_rate004">
                  <div className="progress progress1">
                    <div
                      className="progress-bar w-2"
                      role="progressbar"
                      aria-valuenow={2}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="rating-box">
                    <span className="rating-star full-star" />
                    <span className="rating-star full-star" />
                    <span className="rating-star empty-star" />
                    <span className="rating-star empty-star" />
                    <span className="rating-star empty-star" />
                  </div>
                  <div className="_rate002">1%</div>
                </div>
                <div className="_rate004">
                  <div className="progress progress1">
                    <div
                      className="progress-bar w-1"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="rating-box">
                    <span className="rating-star full-star" />
                    <span className="rating-star empty-star" />
                    <span className="rating-star empty-star" />
                    <span className="rating-star empty-star" />
                    <span className="rating-star empty-star" />
                  </div>
                  <div className="_rate002">1%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="review_right">
              <div className="review_right_heading">
                <h3>Reviews</h3>
                <div className="review_search">
                  <input
                    className="rv_srch"
                    type="text"
                    placeholder="Search reviews..."
                  />
                  <button className="rvsrch_btn">
                    <i className="uil uil-search" />
                  </button>
                </div>
              </div>
            </div>
            <div className="review_all120">
              <div className="review_item">
                <div className="review_usr_dt">
                  <img src="images/left-imgs/img-1.jpg" alt />
                  <div className="rv1458">
                    <h4 className="tutor_name1">John Doe</h4>
                    <span className="time_145">2 hour ago</span>
                  </div>
                </div>
                <div className="rating-box mt-20">
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star half-star" />
                </div>
                <p className="rvds10">
                  Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Fusce lacinia, nunc sit amet tincidunt venenatis.
                </p>
                <div className="rpt100">
                  <span>Was this review helpful?</span>
                  <div className="radio--group-inline-container">
                    <div className="radio-item">
                      <input id="radio-1" name="radio" type="radio" />
                      <label htmlFor="radio-1" className="radio-label">
                        Yes
                      </label>
                    </div>
                    <div className="radio-item">
                      <input id="radio-2" name="radio" type="radio" />
                      <label htmlFor="radio-2" className="radio-label">
                        No
                      </label>
                    </div>
                  </div>
                  <a href="#" className="report145">
                    Report
                  </a>
                </div>
              </div>
              <div className="review_item">
                <div className="review_usr_dt">
                  <img src="images/left-imgs/img-2.jpg" alt />
                  <div className="rv1458">
                    <h4 className="tutor_name1">Jassica William</h4>
                    <span className="time_145">12 hour ago</span>
                  </div>
                </div>
                <div className="rating-box mt-20">
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star empty-star" />
                </div>
                <p className="rvds10">
                  Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Fusce lacinia, nunc sit amet tincidunt venenatis.
                </p>
                <div className="rpt100">
                  <span>Was this review helpful?</span>
                  <div className="radio--group-inline-container">
                    <div className="radio-item">
                      <input id="radio-3" name="radio1" type="radio" />
                      <label htmlFor="radio-3" className="radio-label">
                        Yes
                      </label>
                    </div>
                    <div className="radio-item">
                      <input id="radio-4" name="radio1" type="radio" />
                      <label htmlFor="radio-4" className="radio-label">
                        No
                      </label>
                    </div>
                  </div>
                  <a href="#" className="report145">
                    Report
                  </a>
                </div>
              </div>
              <div className="review_item">
                <div className="review_usr_dt">
                  <img src="images/left-imgs/img-3.jpg" alt />
                  <div className="rv1458">
                    <h4 className="tutor_name1">Albert Dua</h4>
                    <span className="time_145">5 days ago</span>
                  </div>
                </div>
                <div className="rating-box mt-20">
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star half-star" />
                  <span className="rating-star empty-star" />
                </div>
                <p className="rvds10">
                  Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Fusce lacinia, nunc sit amet tincidunt venenatis.
                </p>
                <div className="rpt100">
                  <span>Was this review helpful?</span>
                  <div className="radio--group-inline-container">
                    <div className="radio-item">
                      <input id="radio-5" name="radio2" type="radio" />
                      <label htmlFor="radio-5" className="radio-label">
                        Yes
                      </label>
                    </div>
                    <div className="radio-item">
                      <input id="radio-6" name="radio2" type="radio" />
                      <label htmlFor="radio-6" className="radio-label">
                        No
                      </label>
                    </div>
                  </div>
                  <a href="#" className="report145">
                    Report
                  </a>
                </div>
              </div>
              <div className="review_item">
                <div className="review_usr_dt">
                  <img src="images/left-imgs/img-4.jpg" alt />
                  <div className="rv1458">
                    <h4 className="tutor_name1">Zoena Singh</h4>
                    <span className="time_145">15 days ago</span>
                  </div>
                </div>
                <div className="rating-box mt-20">
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                </div>
                <p className="rvds10">
                  Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Fusce lacinia, nunc sit amet tincidunt venenatis.
                </p>
                <div className="rpt100">
                  <span>Was this review helpful?</span>
                  <div className="radio--group-inline-container">
                    <div className="radio-item">
                      <input id="radio-7" name="radio3" type="radio" />
                      <label htmlFor="radio-7" className="radio-label">
                        Yes
                      </label>
                    </div>
                    <div className="radio-item">
                      <input id="radio-8" name="radio3" type="radio" />
                      <label htmlFor="radio-8" className="radio-label">
                        No
                      </label>
                    </div>
                  </div>
                  <a href="#" className="report145">
                    Report
                  </a>
                </div>
              </div>
              <div className="review_item">
                <div className="review_usr_dt">
                  <img src="images/left-imgs/img-5.jpg" alt />
                  <div className="rv1458">
                    <h4 className="tutor_name1">Joy Dua</h4>
                    <span className="time_145">20 days ago</span>
                  </div>
                </div>
                <div className="rating-box mt-20">
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star full-star" />
                  <span className="rating-star empty-star" />
                  <span className="rating-star empty-star" />
                </div>
                <p className="rvds10">
                  Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Fusce lacinia, nunc sit amet tincidunt venenatis.
                </p>
                <div className="rpt100">
                  <span>Was this review helpful?</span>
                  <div className="radio--group-inline-container">
                    <div className="radio-item">
                      <input id="radio-9" name="radio4" type="radio" />
                      <label htmlFor="radio-9" className="radio-label">
                        Yes
                      </label>
                    </div>
                    <div className="radio-item">
                      <input id="radio-10" name="radio4" type="radio" />
                      <label htmlFor="radio-10" className="radio-label">
                        No
                      </label>
                    </div>
                  </div>
                  <a href="#" className="report145">
                    Report
                  </a>
                </div>
              </div>
              <div className="review_item">
                <a href="#" className="more_reviews">
                  See More Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
