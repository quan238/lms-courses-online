import {
  DELETE_COURSE,
  GET_COURSES,
  GET_DETAIL_COURSE,
  POST_COURSE,
} from "../constants/type";

const stateDefault = {
  result: {},
  postCourse: {},
  detailCourse: {},
};

const getCourses = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_COURSES:
      state.result = action.payload;

      return { ...state };

    case POST_COURSE:
      state.postCourse = action.payload;

      return { ...state };

    case GET_DETAIL_COURSE:
      state.detailCourse = action.payload;

      return { ...state };
    case DELETE_COURSE:

    default:
      return { ...state };
  }
};

export default getCourses;
