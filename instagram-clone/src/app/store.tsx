import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import "../style.css"

export const store = configureStore({
  reducer: { data: rootReducer },
});