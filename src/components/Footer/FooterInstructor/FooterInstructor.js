import React from "react";

export default function FooterInstructor() {
  return (
    <footer className="footer mt-40">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="item_f1">
              <a href="terms_of_use.html">Copyright Policy</a>
              <a href="terms_of_use.html">Terms</a>
              <a href="terms_of_use.html">Privacy Policy</a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="footer_bottm">
              <div className="row">
                <div className="col-md-6">
                  <ul className="fotb_left">
                    <li>
                      <a href="index.html">
                        <div className="footer_logo">
                          <img src="images/logo1.svg" alt />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="edu_social_links">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
