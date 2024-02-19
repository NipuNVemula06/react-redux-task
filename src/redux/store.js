import { configureStore, combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./reducers/menuSlice";
import submenuReducer from "./reducers/submenuSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  menu: menuReducer,
  submenu: submenuReducer,
});

const persistConfig = {
  key: "root",
  storage, // store the state in local storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});

export const persitor = persistStore(store);
