import { MOVIELISTDATA, SEARCH, SINGLEMOVIE } from "../actionTypes/actionTypes";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case MOVIELISTDATA.LOAD:
    case SEARCH.LOAD:
    case SINGLEMOVIE.LOAD:
      return true;
    case MOVIELISTDATA.LOAD_SUCCESS:
    case SEARCH.LOAD_SUCCESS:
    case SINGLEMOVIE.LOAD_SUCCESS:
      return false;
    case MOVIELISTDATA.LOAD_FAIL:
    case SEARCH.LOAD_FAIL:
    case SINGLEMOVIE.LOAD_FAIL:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
