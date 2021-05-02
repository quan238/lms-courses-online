import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import getCourses from "./reducers/getCourses";
import loginUser from "./reducers/auth/loginUser";
import getUser from "./reducers/auth/getUser";
import { loadingReducer } from "./reducers/loading/loadingReducer";

// import reducers

const rootReducer = combineReducers({
  // declare reducers in here
  getCoursesReducer: getCourses,
  loginUserReducer: loginUser,
  getUserReducer: getUser,
  LoadingReducer: loadingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(
    // initialize store
    applyMiddleware(reduxThunk)
  )
);

export default store;
