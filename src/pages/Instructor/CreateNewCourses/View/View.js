import React from "react";
// formik
import { useFormik } from "formik";
import * as yup from "yup";

export default function View(props) {
  // formik
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      file: "",
    },
    onSubmit: (values) => {
      console.log(values);
      props.getFile(values);
    },
  });
  return (
    <div className="mt-5 step-tab-panel step-tab-gallery" id="tab_step2">
      <div className="tab-from-content">
        <div className="title-icon">
          <h3 className="title">
            <i class="fa fa-file-image"></i>
            View
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="course__form" id="form2">
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
                            onChange={handleChange}
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
