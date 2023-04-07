// import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("🤍type: ", action.type);
  console.log("#️⃣payload: ", action.payload);
  console.log("❤currentState: ", store.getState());

  next(action);

  console.log("💚nextState: ", store.getState());
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [loggerMiddleware],
});
