export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_TO_FAVORITE = "REMOVE_TO_FAVORITE";
export const FETCH_JOBS = "FETCH_JOBS";

export const addToFavoriteAction = data => ({ type: ADD_TO_FAVORITE, payload: data });
export const removeToFavoriteAction = i => ({ type: REMOVE_TO_FAVORITE, payload: i });

export const fetchJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: FETCH_JOBS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
