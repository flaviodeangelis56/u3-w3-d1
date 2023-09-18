import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favoriteRed";
const rootReducer = combineReducers({
  content: favoriteReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
