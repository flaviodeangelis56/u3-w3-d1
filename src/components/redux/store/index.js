import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favoriteRed";
import JobsReducer from "../reducers/jobsRed";
const rootReducer = combineReducers({
  content: favoriteReducer,
  jobs: JobsReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
