import { FETCH_JOBS } from "../actions";

const iState = {
  content: [],
};

const JobsReducer = (state = iState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default JobsReducer;
