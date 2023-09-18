export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_TO_FAVORITE = "REMOVE_TO_FAVORITE";

export const addToFavoriteAction = data => ({ type: ADD_TO_FAVORITE, payload: data });
export const removeToFavoriteAction = i => ({ type: REMOVE_TO_FAVORITE, payload: i });
