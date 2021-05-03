import Axios from "axios";
import { accessToken } from "../config/js/settingConfig";

const token = localStorage.getItem(accessToken);

console.log(token);

export default class CourseService {
  async fetchAll() {
    return await Axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
      method: "GET",
      mimeType: "json",
    });
  }
  async fetchDetailCourse(id) {
    return await Axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
      method: "GET",
      mimeType: "json",
    });
  }
  async postCourse(course) {
    return await Axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc      ",
      method: "POST",
      data: course,
    });
  }
  async deleteCourse(id) {
    return await Axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`,
      method: "DELETE",
    });
  }
}
