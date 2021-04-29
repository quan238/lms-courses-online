import React from "react";
import udemy from "../../assets/images/udemy-official.svg";
import "./Login.scss";

export default function Login() {
  return (
    <div className="sign_in_up_bg" style={{}}>
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
              <form>
                <div className="ui search focus mt-15">
                  <div className="ui left icon input swdh95">
                    <input
                      className="prompt srch_explore"
                      type="email"
                      name="emailaddress"
                      defaultValue
                      id="id_email"
                      required
                      maxLength={64}
                      placeholder="Email Address"
                    />
                    <i className="uil uil-envelope icon icon2" />
                  </div>
                </div>
                <div className="ui search focus mt-15">
                  <div className="ui left icon input swdh95">
                    <input
                      className="prompt srch_explore"
                      type="password"
                      name="password"
                      defaultValue
                      id="id_password"
                      required
                      maxLength={64}
                      placeholder="Password"
                    />
                    <i className="uil uil-key-skeleton-alt icon icon2" />
                  </div>
                </div>
                <div className="ui form mt-30 checkbox_sign">
                  <div className="inline field">
                    <div className="ui checkbox mncheck">
                      <input type="checkbox" tabIndex={0} className="hidden" />
                      <label>Remember Me</label>
                    </div>
                  </div>
                </div>
                <button className="login-btn" type="submit">
                  Sign In
                </button>
              </form>
              <p className="sgntrm145">
                Or <a href="forgot_password.html">Forgot Password</a>.
              </p>
              <p className="mb-0 mt-30 hvsng145">
                Don't have an account? <a href="sign_up.html">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
