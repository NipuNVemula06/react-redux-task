import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./reducers/menuSlice";
import submenuReducer from "./reducers/submenuSlice";

const rootReducer = combineReducers({
  menu: menuReducer,
  submenu: submenuReducer,
});

export default rootReducer;
