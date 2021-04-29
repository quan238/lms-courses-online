import Axios from "axios";

export default class UserService {
  async loginUser(user) {
    return await Axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap ",
      method: "POST",
      data: user,
    });
  }
}
