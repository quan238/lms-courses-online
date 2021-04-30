import { createAction } from "..";
import { userService } from "../../../services/Courses";
import { GET_USER } from "../../constants/type";

export const getUsers = () => {
  return (dispatch) => {
    userService.fetchUser().then((result) => {
      dispatch(createAction(GET_USER, result));
    });
  };
};
