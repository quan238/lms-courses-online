import { GET_USER } from "../../constants/type";

const stateDefault = {
  result: [],
};

const getUser = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_USER:
      state.result = action.payload;

      return { ...state };

    default:
      return { ...state };
  }
};

export default getUser;
