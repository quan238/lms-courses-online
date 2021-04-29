import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";

// import reducers 


const rootReducer = combineReducers({
  // declare reducers in here

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
