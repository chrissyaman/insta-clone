import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice";
import "../style.css"

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});