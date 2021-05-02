import Axios from "axios";
import { createAction } from ".";
import { courseServices } from "../../services/Courses";
import { GET_COURSES, POST_COURSE } from "../constants/type";

export const getCourses = () => {
  return (dispatch) => {
    courseServices.fetchAll().then((result) => {
      dispatch(createAction(GET_COURSES, result));
    });
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
