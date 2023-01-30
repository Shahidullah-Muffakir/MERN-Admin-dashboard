import React from "react";
import ReactDOM from "react-dom/client";
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import globalReducer from "state";
import {api} from './state/index'



const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
