import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import rootReducer from "./reducers/rootReducer";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const store = createStore(rootReducer, applyMiddleware(logger));
ReactDOM.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default store;