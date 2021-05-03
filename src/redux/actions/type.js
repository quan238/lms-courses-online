import Axios from "axios";
import { createAction } from ".";
import { courseServices } from "../../services/Courses";
import {
  DELETE_COURSE,
  GET_COURSES,
  GET_DETAIL_COURSE,
  POST_COURSE,
} from "../constants/type";
// alert
import Swal from "../../../node_modules/sweetalert2/dist/sweetalert2.js";
import "../../../node_modules/sweetalert2/src/sweetalert2.scss";

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

export const getCourses = () => {
  return async (dispatch) => {
    //Gọi action loading open
    dispatch({
      type: "openLoading",
    });
    setTimeout(async () => {
      await courseServices.fetchAll().then((result) => {
        dispatch(createAction(GET_COURSES, result));
      });
      // Tắt loadings
      dispatch({
        type: "closeLoading",
      });
    }, 900);
  };
};

export const postCourses = (course, file) => {
  return (dispatch) => {
    courseServices
      .postCourse(course)
      .then((result) => {
        dispatch(createAction(POST_COURSE), result.data);

        let formData = new FormData();

        formData.append("file", file);
        formData.append("tenKhoaHoc", result.data.tenKhoaHoc);

        Axios({
          method: "POST",
          url:
            "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
          data: formData,
        })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getDetailCourse = (id) => {
  return (dispatch) => {
    courseServices
      .fetchDetailCourse(id)
      .then((result) => {
        dispatch(createAction(GET_DETAIL_COURSE, result.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteCourse = (id) => {
  return (dispatch) => {
    courseServices
      .deleteCourse(id)
      .then((result) => {
        //Đăng nhập thành công chuyển hướng về home
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
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
