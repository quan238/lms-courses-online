import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import getCourses from "./reducers/getCourses";
import loginUser from "./reducers/auth/loginUser";

// import reducers

const rootReducer = combineReducers({
  // declare reducers in here
  getCoursesReducer: getCourses,
  loginUserReducer: loginUser,
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
