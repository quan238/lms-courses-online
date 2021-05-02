import React, { useState } from "react";
import General from "./General/General";
import View from "./View/View";
import Content from "./Content/Content";
import Information from "./Information/Information";
// redux
import { useDispatch } from "react-redux";
import "./CreateNewCourses.scss";
import { postCourses } from "../../../redux/actions/type";

export default function CreateNewCourses() {
  // set state course
  const [course, setCourse] = useState(null);

  const dispatch = useDispatch();

  //file upload
  const [file, setFile] = useState(null);

  if (course != null) {
    // let hinhAnh = {
    //   hinhAnh: `https://elearning0706.cybersoft.edu.vn/hinhanh/${course.hinhAnh.name}`,
    // };

    // let values = { ...course, ...hinhAnh };

    // console.log(course);
    dispatch(postCourses(course, file));
    console.log(file);
    console.log(course);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="st_title">
            <i className="uil uil-analysis" /> Create New Course
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="course_tabs_1" style={{ marginTop: "30px" }}>
            <div id="add-course-tab" className="step-app">
              <General
                getCourse={(course, file) => {
                  setCourse(course);
                  setFile(file);
                }}
              ></General>
              {/* <View getFile={(file) => setFile(file)}></View> */}
              <div
                className="step-footer step-tab-pager"
                style={{ justifyContent: "flex-end" }}
              >
                <button
                  data-direction="finish"
                  className="btn btn-default steps_btn"
                  type="submit"
                  form="form1"
                >
                  Submit for Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
