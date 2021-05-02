import React, { useState } from "react";

import "./General.scss";

// formik
import { useFormik } from "formik";
import * as yup from "yup";

import { NavLink } from "react-router-dom";
import { taiKhoan } from "../../../../config/js/settingConfig";
import Axios from "axios";

export default function General(props) {
  // date
  var d = new Date();
  var date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  var dateTime = date;

  // hidden visibile for drop down

  let visible = [" visible", "active"];

  let hidden = ["hidden", "noactive"];

  const [drop, setDrop] = useState(hidden);
  const [drop2, setDrop2] = useState(hidden);

  const user = JSON.parse(localStorage.getItem(taiKhoan));

  const {
    setFieldValue,
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: " ",
      maNhom: "GP01",
      ngayTao: dateTime,
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: user.taiKhoan,
    },

    validationSchema: yup.object().shape({}),

    onSubmit: (values) => {
      let file = values.hinhAnh;

      let clonevalues = { ...values };

      clonevalues.hinhAnh = clonevalues.hinhAnh.name;
      var str = clonevalues.tenKhoaHoc;
      str = str.replace(/\s+/g, "-").toLowerCase();

      clonevalues.maKhoaHoc = `${str}-${clonevalues.maKhoaHoc}`;
      props.getCourse(clonevalues, file);
    },
  });

  // active
  return (
    <div className="step-tab-panel step-tab-info active" id="tab_step1">
      <div className="tab-from-content">
        <form className="course__form" id="form1" onSubmit={handleSubmit}>
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
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                  className={`form-select ui hj145 dropdown cntry152 prompt srch_explore selection ${drop[1]}`}
                  aria-label="Default select example"
                  onClick={() => {
                    if (drop[0] === visible[0]) {
                      setDrop(hidden);
                    } else {
                      setDrop(visible);
                      setDrop2(hidden);
                    }
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  className={`form-select ui hj145 dropdown cntry152 prompt srch_explore selection ${drop[1]}`}
                  aria-label="Default select example"
                  onClick={() => {
                    if (drop2[0] === visible[0]) {
                      setDrop2(hidden);
                    } else {
                      setDrop2(visible);
                      setDrop(hidden);
                    }
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                      <img src="images/courses/add_img.jpg" alt />
                    </div>
                  </div>
                  <div className="view_img_right">
                    <h4>Cover Image</h4>
                    <p>
                      Upload your course image here. It must meet our course
                      image quality standards to be accepted. Important
                      guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png. no
                      text on the image.
                    </p>
                    <div className="upload__input">
                      <div className="input-group">
                        <div className="custom-file">
                          <input
                            name="file"
                            onChange={(e) =>
                              setFieldValue("hinhAnh", e.target.files[0])
                            }
                            onBlur={handleBlur}
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
  );
}
