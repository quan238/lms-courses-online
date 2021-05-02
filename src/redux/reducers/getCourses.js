import { GET_COURSES, POST_COURSE } from "../constants/type";

const stateDefault = {
  result: {},
  postCourse: {},
};

const getCourses = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_COURSES:
      state.result = action.payload;

      return { ...state };

    case POST_COURSE:
      state.postCourse = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default getCourses;
