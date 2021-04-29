import { createAction } from ".";
import { courseServices } from "../../services/Courses";
import { GET_COURSES } from "../constants/type";

export const getCourses = () => {
  return (dispatch) => {
    courseServices.fetchAll().then((result) => {
      dispatch(createAction(GET_COURSES, result));
    });
  };
};
