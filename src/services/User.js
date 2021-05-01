import Axios from "axios";

export default class UserService {
  async loginUser(user) {
    console.log(user)
    return await Axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    });
  }
  async RegisterUser(user) {
    return await Axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    });
  }
  async fetchUser() {
    return await Axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      method: "GET",
      mimeType: "json",
    });
  }
}
