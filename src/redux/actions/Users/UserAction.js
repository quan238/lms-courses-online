import { createAction } from "..";
import { history } from "../../../components/App/App";
import { accessToken, taiKhoan } from "../../../config/js/settingConfig";
import { userService } from "../../../services/Courses";
import { FETCH_CREDENTIALS, REGISTER_USER } from "../../constants/type";
// alert
import Swal from "../../../../node_modules/sweetalert2/dist/sweetalert2.js";
import "../../../../node_modules/sweetalert2/src/sweetalert2.scss";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  width: 300,

  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const loginUser = (user) => {
  return (dispatch) => {
    userService
      .loginUser(user)
      .then((result) => {
        //Lấy giá trị api gửi về lưu vào localstorage
        dispatch(createAction(FETCH_CREDENTIALS, result.data));

        localStorage.setItem(accessToken, result.data.accessToken);
        localStorage.setItem(taiKhoan, JSON.stringify(result.data));

        //Đăng nhập thành công chuyển hướng về home
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });

        history.push("/"); //history.push nhận vào pathName => di chuyển đến trang component tương ứng
      })
      .catch((err) => {
        //Đăng nhập thành công chuyển hướng về home

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Try again!",
        });
      });
  };
};

export const registerUser = (user) => {
  return (dispatch) => {
    userService
      .RegisterUser(user)
      .then((result) => {
        console.log(result);
        //Lấy giá trị api gửi về lưu vào localstorage

        dispatch(createAction(REGISTER_USER, result.data));

        localStorage.setItem(accessToken, result.data.accessToken);
        localStorage.setItem(taiKhoan, JSON.stringify(result.data));

        //Đăng nhập thành công chuyển hướng về home
        Toast.fire({
          icon: "success",
          title: "Signed up successfully",
        });

        history.push("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Try again`,
        });
      });
  };
};
