// store : state와 reducer를 포함하는 것
import { applyMiddleware, compose, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";

const configureStore = () => {
  const middlewares = [];
  const enhaner =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware());
  const store = createStore(reducer, enhaner);
  store.dispatch({
    type: "CHANGE_NICKNAME",
    data: "kangjunseok",
  });
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
