import React from "react";
import udemy from "../../assets/images/udemy-official.svg";
import "./Login.scss";

// formik
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/Users/UserAction";
import { NavLink } from "react-router-dom";

export default function Login(props) {
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
      taiKhoan: "",
      matKhau: "",
    },

    validationSchema: yup.object().shape({
      // taiKhoan: yup.string().required('Tài khoản không được bỏ trống!').min(6,'Tài khoản tối thiểu 6 ký tự!').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'email không hợp lệ'),
      taiKhoan: yup
        .string()
        .required("Tài khoản không được bỏ trống!")
        .min(3, "Tài khoản tối thiểu 3 ký tự!"),
      matKhau: yup.string().required("Mật khẩu không được bỏ trống !"),
    }),

    onSubmit: (values) => {
      //values <=> this.state.values (react class component)
      console.log(values);
      //Gọi api hoặc action để đưa dữ liệu về server
      dispatch(loginUser(values));
    },
  });

  return (
    <div className="sign_in_up_bg mb-40 mt-30" style={{}}>
      <div className="container">
        <div className="row justify-content-lg-center justify-content-md-center">
          <div className="col-lg-6 col-md-8">
            <div className="sign_form">
              <h2>Welcome Back</h2>
              <p>Log In to Your Udemy Account!</p>
              <button className="social_lnk_btn color_btn_fb">
                <i className="fab fa-facebook " />
                Continue with Facebook
              </button>
              <button className="social_lnk_btn mt-15 color_btn_tw">
                <i className="fab fa-twitter" />
                Continue with Twitter
              </button>
              <button className="social_lnk_btn mt-15 color_btn_go">
                <i className="fab fa-google" />
                Continue with Google
              </button>
              <form onSubmit={handleSubmit}>
                <div className="ui search focus mt-20">
                  <div className="ui left icon input swdh95">
                    <input
                      className="prompt srch_explore"
                      type="text"
                      name="taiKhoan"
                      id="id_email"
                      required
                      maxLength={64}
                      placeholder="Email Address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <i className="uil uil-envelope icon icon2" />
                  </div>
                  {errors.taiKhoan && touched.taiKhoan ? (
                    <p className="text-danger mt-3">{errors.taiKhoan}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="ui search focus mt-20">
                  <div className="ui left icon input swdh95">
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
                    <i className="uil uil-key-skeleton-alt icon icon2" />
                  </div>
                  {errors.matKhau && touched.matKhau ? (
                    <p className="text-danger">{errors.matKhau}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="ui form mt-30 checkbox_sign">
                  <div className="inline field">
                    <div className="ui checkbox mncheck">
                      <input type="checkbox" tabIndex={0} className="" />
                      <label>Remember Me</label>
                    </div>
                  </div>
                </div>
                <button className="login-btn" type="submit" disabled={!isValid}>
                  Sign In
                </button>
              </form>
              <p className="sgntrm145">
                Or <a href="forgot_password.html">Forgot Password</a>.
              </p>
              <p className="mb-0 mt-30 hvsng145">
                Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
