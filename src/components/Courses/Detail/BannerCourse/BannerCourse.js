import React from "react";
import "./BannerCourse.scss";

export default function BannerCourse(props) {
  const detailCourse = props.detailCourse;

  console.log(detailCourse);
  return (
    <div className="_215b01 detailCourse">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section3125">
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="preview_video">
                    <a
                      href="#"
                      className="fcrse_img"
                      data-toggle="modal"
                      data-target="#videoModal"
                    >
                      <img src={detailCourse.hinhAnh} alt />
                      <div className="course-overlay">
                        <div className="badge_seller">Bestseller</div>
                        <span className="play_btn1">
                          <i className="uil uil-play" />
                        </span>
                        <span className="_215b02">Preview this course</span>
                      </div>
                    </a>
                  </div>
                  <div className="_215b10">
                    <a href="#" className="_215b11">
                      <span>
                        <i className="uil uil-heart" />
                      </span>
                      Save
                    </a>
                    <a href="#" className="_215b12">
                      <span>
                        <i className="uil uil-windsock" />
                      </span>
                      Report abuse
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-6">
                  <div className="_215b03">
                    <h2>{detailCourse.tenKhoaHoc}</h2>
                    <span className="_215b04">{detailCourse.moTa}</span>
                  </div>
                  <div className="_215b05">
                    <div className="crse_reviews mr-2">
                      <i className="uil uil-star" />
                      4.5
                    </div>
                    (81,665 ratings)
                  </div>
                  <div className="_215b05">
                    {detailCourse.soLuongHocVien} students enrolled
                  </div>
                  <div className="_215b06">
                    <div className="_215b07">
                      <span>
                        <i className="uil uil-comment" />
                      </span>
                      English
                    </div>
                    <div className="_215b08">
                      <span>
                        <i className="uil uil-closed-captioning" />
                      </span>
                      <span>
                        English, Dutch
                        <span className="caption_tooltip">
                          12 more
                          <span className="caption-content">
                            <span>French</span>
                            <span>Hindi</span>
                            <span>German [Auto-generated]</span>
                            <span>Indonesian [Auto-generated]</span>
                            <span>Italian [Auto-generated]</span>
                            <span>Japanese [Auto-generated]</span>
                            <span>Korean</span>
                            <span>Polish</span>
                            <span>Portuguese [Auto-generated]</span>
                            <span>Spanish [Auto-generated]</span>
                            <span>Traditional Chinese</span>
                            <span>Turkish [Auto-generated]</span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="_215b05">
                    Last updated {detailCourse.ngayTao}
                  </div>
                  <ul className="_215b31">
                    <li>
                      <button className="btn_adcart">Enroll Course</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
