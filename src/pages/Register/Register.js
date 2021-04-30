import React from "react";

// formik
import { withFormik, useFormik } from "formik";
import * as yup from "yup";
//redux router
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerUser } from "../../redux/actions/Users/UserAction";

export default function Register() {
  const dispatch = useDispatch();

  const {
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
    },

    validationSchema: yup.object().shape({
      hoTen: yup.string().required("Họ Tên không được bỏ trống"),
      // taiKhoan: yup.string().required('Tài khoản không được bỏ trống!').min(6,'Tài khoản tối thiểu 6 ký tự!').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'email không hợp lệ'),
      taiKhoan: yup
        .string()
        .required("Tài khoản không được bỏ trống!")
        .min(3, "Tài khoản tối thiểu 3 ký tự!"),
      email: yup
        .string()
        .required("Tài khoản không được bỏ trống!")
        .min(3, "Tài khoản tối thiểu 3 ký tự!"),
      matKhau: yup.string().required("Mật khẩu không được bỏ trống !"),
    }),

    onSubmit: (values) => {
      //values <=> this.state.values (react class component)

      console.log(values);

      let ketQua = {
        maNhom: "GP01",
        soDt: "null",
        ...values,
      };

      console.log(ketQua);

      dispatch(registerUser(ketQua));

      //Gọi api hoặc action để đưa dữ liệu về server
    },
  });

  return (
    <div className="sign_in_up_bg">
      <div className="container">
        <div className="row justify-content-lg-center justify-content-md-center">
          <div className="col-lg-6 col-md-8">
            <div className="sign_form">
              <h2>Welcome to Udemy</h2>
              <p>Sign Up and Start Learning!</p>
              <form onSubmit={handleSubmit}>
                <div className="ui search focus">
                  <div className="ui left icon input swdh11 swdh19">
                    <input
                      className="prompt srch_explore"
                      type="text"
                      name="hoTen"
                      id="id_fullname"
                      required
                      maxLength={64}
                      placeholder="Full Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.hoTen && touched.hoTen ? (
                    <p className="text-danger mt-3">{errors.hoTen}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="ui search focus my-4">
                  <div className="ui left icon input swdh11 swdh19">
                    <input
                      className="prompt srch_explore"
                      type="text"
                      name="taiKhoan"
                      id="id_taiKhoan"
                      required
                      maxLength={64}
                      placeholder="tai Khoan "
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.taiKhoan && touched.taiKhoan ? (
                    <p className="text-danger mt-3">{errors.taiKhoan}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="ui search focus mt-15">
                  <div className="ui left icon input swdh11 swdh19">
                    <input
                      className="prompt srch_explore"
                      type="email"
                      name="email"
                      id="id_email"
                      required
                      maxLength={64}
                      placeholder="Email Address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <p className="text-danger mt-3">{errors.email}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="ui search focus mt-15">
                  <div className="ui left icon input swdh11 swdh19">
                    <input
                      className="prompt srch_explore"
                      type="password"
                      name="matKhau"
                      id="id_password"
                      required
                      maxLength={64}
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.matKhau && touched.matKhau ? (
                    <p className="text-danger mt-3">{errors.matKhau}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="ui form mt-30 checkbox_sign">
                  <div className="inline field">
                    <div className="ui checkbox mncheck">
                      <input type="checkbox" tabIndex={0} required />
                      <label>
                        I’m in for emails with exciting discounts and
                        personalized recommendations
                      </label>
                    </div>
                  </div>
                </div>
                <button className="login-btn" type="submit" disabled={!isValid}>
                  Next
                </button>
              </form>
              <p className="sgntrm145">
                By signing up, you agree to our{" "}
                <a href="terms_of_use.html">Terms of Use</a> and{" "}
                <a href="terms_of_use.html">Privacy Policy</a>.
              </p>
              <p className="mb-0 mt-30">
                Already have an account? <a href="sign_in.html">Log In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
