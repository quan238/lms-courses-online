import React, { useState } from "react";
// formik
import { useFormik } from "formik";
import * as yup from "yup";

import "./UpdateCourse.scss";

export default function UpdateCourse(props) {
  let { updateCourse } = props;

  const [course, setCourse] = useState(updateCourse);

  return (
    <div class="update_course_popup">
      <div
        className="step-tab-panel step-tab-info active update_course"
        id="tab_step1"
      >
        <h2 class="st_title text-center mt-3">
          <i class="uil uil-analysis"></i> Update Course
        </h2>{" "}
        <a
          class="close_update_course"
          onClick={() => {
            props.close();
          }}
          href="#"
        >
          &times;
        </a>
        <div className="tab-from-content">
          <form className="course__form" id="form1">
            <div className="general_info10">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="ui search focus mt-30 lbel25">
                    <label>Course Title*</label>
                    <div className="ui left icon input swdh19">
                      <input
                        className="prompt srch_explore"
                        type="text"
                        placeholder="Insert your course title."
                        name="tenKhoaHoc"
                        data-purpose="edit-course-title"
                        maxLength={60}
                        id="main[title]"
                        value={course.tenKhoaHoc}
                      />
                      <div className="badge_num">60</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="ui search focus mt-30 lbel25">
                    <label>Course Subtitle*</label>
                    <div className="ui left icon input swdh19">
                      <input
                        className="prompt srch_explore"
                        type="text"
                        placeholder="Insert your course Subtitle."
                        name="biDanh"
                        data-purpose="edit-course-title"
                        maxLength={60}
                        id="sub[title]"
                        value={course.biDanh}
                      />
                      <div className="badge_num2">120</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="course_des_textarea mt-30 lbel25">
                    <label>Course Description*</label>
                    <div className="course_des_bg">
                      <ul className="course_des_ttle">
                        <li>
                          <a href="#">
                            <i className="fa fa-bold" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-italic" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-list"></i>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <i className="fa fa-list-ul"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-link" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-text-width"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-text-height"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="textarea_dt">
                        <div className="ui form swdh339">
                          <div className="field">
                            <textarea
                              rows={5}
                              name="moTa"
                              id="id_course_description"
                              placeholder="Insert your course description"
                              value={course.moTa}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="mt-30 lbel25">
                    <label>Course Category*</label>
                  </div>
                  <select
                    name="maDanhMucKhoaHoc"
                    className={`form-select ui hj145 dropdown cntry152 prompt srch_explore selection `}
                    aria-label="Default select example"
                    value={course.maDanhMucKhoaHoc}
                  >
                    <option value="">Select Category</option>
                    <option value="BackEnd">BackEnd</option>
                    <option value="Design">Design</option>
                    <option value="DiDong">DiDong</option>
                    <option value="FrontEnd">FrontEnd</option>
                    <option value="FullStack">FullStack</option>
                    <option value="TuDuy">TuDuy</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="mt-30 lbel25">
                    <label>Course Subcategory*</label>
                  </div>
                  <select
                    name="maKhoaHoc"
                    className={`form-select ui hj145 dropdown cntry152 prompt srch_explore selection `}
                    aria-label="Default select example"
                  >
                    <option value>Select Subcategory</option>
                    <option value="javascript">Javascript</option>
                    <option value="angular">Angular</option>
                    <option value="react">React</option>
                    <option value="css">CSS</option>
                    <option value="php">PHP</option>
                    <option value="nodejs">Node.Js</option>
                    <option value="wordPress">WordPress</option>
                    <option value="Vuejs">Vue js</option>
                    <option value="Shopify">Shopify</option>
                    <option value="Magento">Magento</option>
                    <option value="OpenCart">React</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="view_info10">
              <div className="row">
                <div className="col-lg-12">
                  <div className="view_all_dt">
                    <div className="view_img_left">
                      <div className="view__img">
                        {course.hinhAnh == " " ? (
                          <img src={course.hinhAnh} alt />
                        ) : (
                          <img src="images/courses/add_img.jpg" alt />
                        )}
                      </div>
                    </div>
                    <div className="view_img_right">
                      <h4>Cover Image</h4>
                      <p>
                        Upload your course image here. It must meet our course
                        image quality standards to be accepted. Important
                        guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png.
                        no text on the image.
                      </p>
                      <div className="upload__input">
                        <div className="input-group">
                          <div className="custom-file">
                            <input
                              name="file"
                              type="file"
                              className="custom-file-input"
                              id="inputGroupFile04"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="inputGroupFile04"
                            >
                              No Choose file
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
