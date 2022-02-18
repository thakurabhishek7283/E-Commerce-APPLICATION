import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { StyledEngineProvider } from "@mui/material";

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(thunk, logger))
);

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </Provider>,
  document.getElementById("root")
);
