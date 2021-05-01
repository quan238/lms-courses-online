import React from "react";

import "./General.scss";

export default function General() {
  return (
    <div className="step-tab-panel step-tab-info active" id="tab_step1">
      <div className="tab-from-content">
        <div className="title-icon">
          <h3 className="title">
            <i class="fa fa-info-circle"></i>
            General Information
          </h3>
        </div>
        <div className="course__form">
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
                      name="title"
                      data-purpose="edit-course-title"
                      maxLength={60}
                      id="main[title]"
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
                      name="subtitle"
                      data-purpose="edit-course-title"
                      maxLength={60}
                      id="sub[title]"
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
                          <i class="fa fa-list"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i class="fa fa-list-ul"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-link" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-text-width"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-text-height"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="textarea_dt">
                      <div className="ui form swdh339">
                        <div className="field">
                          <textarea
                            rows={5}
                            name="description"
                            id="id_course_description"
                            placeholder="Insert your course description"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="mt-30 lbel25">
                  <label>Language*</label>
                </div>
                <div
                  className="ui hj145 dropdown cntry152 prompt srch_explore selection  visible"
                  //active
                  tabIndex={0}
                >
                  <select>
                    <option value>Select Language</option>
                    <option value={1}>English</option>
                    <option value={2}>Español</option>
                    <option value={3}>Português</option>
                    <option value={4}>日本語</option>
                    <option value={5}>Deutsch</option>
                    <option value={6}>Français</option>
                    <option value={7}>Türkçe</option>
                    <option value={8}>हिन्दी</option>
                    <option value={9}>Italiano</option>
                    <option value={10}>Polski</option>
                    <option value={11}>ภาษาไทย</option>
                    <option value={12}>Română</option>
                    <option value={13}>Telugu</option>
                    <option value={14}>मराठी</option>
                    <option value={15}>ਪੰਜਾਬੀ</option>
                  </select>
                  <i className="dropdown icon" />
                  <div className="default text">Select Language</div>
                  <div
                    className="menu transition hidden"
                    tabIndex={-1}
                    // style={{ display: "block !important" }}
                  >
                    <div className="item" data-value={1}>
                      English
                    </div>
                    <div className="item" data-value={2}>
                      Español
                    </div>
                    <div className="item" data-value={3}>
                      Português
                    </div>
                    <div className="item" data-value={4}>
                      日本語
                    </div>
                    <div className="item" data-value={5}>
                      Deutsch
                    </div>
                    <div className="item" data-value={6}>
                      Français
                    </div>
                    <div className="item" data-value={7}>
                      Türkçe
                    </div>
                    <div className="item" data-value={8}>
                      हिन्दी
                    </div>
                    <div className="item" data-value={9}>
                      Italiano
                    </div>
                    <div className="item" data-value={10}>
                      Polski
                    </div>
                    <div className="item" data-value={11}>
                      ภาษาไทย
                    </div>
                    <div className="item" data-value={12}>
                      Română
                    </div>
                    <div className="item" data-value={13}>
                      Telugu
                    </div>
                    <div className="item" data-value={14}>
                      मराठी
                    </div>
                    <div className="item" data-value={15}>
                      ਪੰਜਾਬੀ
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="mt-30 lbel25">
                  <label>Course Category*</label>
                </div>
                <div
                  class="ui hj145 dropdown cntry152 prompt srch_explore selection"
                  tabindex="0"
                >
                  <select>
                    <option value="">Select Category</option>
                    <option value="1">Development</option>
                    <option value="2">Business</option>
                    <option value="3">Finance &amp; Accounting</option>
                    <option value="4">IT &amp; Software</option>
                    <option value="5">Office Productivity</option>
                    <option value="6">Personal Development</option>
                    <option value="7">Design</option>
                    <option value="8">Marketing</option>
                    <option value="9">Lifestyle</option>
                    <option value="10">Photography</option>
                    <option value="11">Health &amp; Fitness</option>
                    <option value="12">Music</option>
                    <option value="13">Teaching &amp; Academics</option>
                  </select>
                  <i class="dropdown icon"></i>
                  <div class="default text">Select Category</div>
                  <div
                    class="menu transition hidden "
                    tabindex="-1"
                    style={{ display: "block !important" }}
                  >
                    <div class="item" data-value="1">
                      Development
                    </div>
                    <div class="item" data-value="2">
                      Business
                    </div>
                    <div class="item" data-value="3">
                      Finance &amp; Accounting
                    </div>
                    <div class="item" data-value="4">
                      IT &amp; Software
                    </div>
                    <div class="item" data-value="5">
                      Office Productivity
                    </div>
                    <div class="item" data-value="6">
                      Personal Development
                    </div>
                    <div class="item" data-value="7">
                      Design
                    </div>
                    <div class="item" data-value="8">
                      Marketing
                    </div>
                    <div class="item" data-value="9">
                      Lifestyle
                    </div>
                    <div class="item" data-value="10">
                      Photography
                    </div>
                    <div class="item" data-value="11">
                      Health &amp; Fitness
                    </div>
                    <div class="item" data-value="12">
                      Music
                    </div>
                    <div class="item" data-value="13">
                      Teaching &amp; Academics
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="mt-30 lbel25">
                  <label>Course Subcategory*</label>
                </div>
                <div
                  className="ui hj145 dropdown cntry152 prompt srch_explore selection"
                  tabIndex={0}
                >
                  <select>
                    <option value>Select Subcategory</option>
                    <option value={1}>Javascript</option>
                    <option value={2}>Angular</option>
                    <option value={3}>React</option>
                    <option value={4}>CSS</option>
                    <option value={5}>PHP</option>
                    <option value={6}>Node.Js</option>
                    <option value={7}>WordPress</option>
                    <option value={8}>Vue JS</option>
                    <option value={9}>Shopify</option>
                    <option value={10}>Magento</option>
                    <option value={11}>Open Cart </option>
                  </select>
                  <i className="dropdown icon" />
                  <div className="default text">Select Subcategory</div>
                  <div className="menu  transition hidden" tabIndex={-1}>
                    <div className="item" data-value={1}>
                      Javascript
                    </div>
                    <div className="item" data-value={2}>
                      Angular
                    </div>
                    <div className="item" data-value={3}>
                      React
                    </div>
                    <div className="item" data-value={4}>
                      CSS
                    </div>
                    <div className="item" data-value={5}>
                      PHP
                    </div>
                    <div className="item" data-value={6}>
                      Node.Js
                    </div>
                    <div className="item" data-value={7}>
                      WordPress
                    </div>
                    <div className="item" data-value={8}>
                      Vue JS
                    </div>
                    <div className="item" data-value={9}>
                      Shopify
                    </div>
                    <div className="item" data-value={10}>
                      Magento
                    </div>
                    <div className="item" data-value={11}>
                      Open Cart{" "}
                    </div>
                  </div>
                </div>
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
