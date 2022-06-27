import loadingReducer from "./loadingReducer";
import movielist from "./movielist";
import errorReducer from "./errorReducer";
import navbarToggle from "./navbarToggle";
import searchReducer from "./searchToggle";
import singleMovieData from "./singleMovieData";
import registeredUser from "./registeredUser";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  movielist: movielist,
  error: errorReducer,
  navbarToggle: navbarToggle,
  search: searchReducer,
  singleMovieData: singleMovieData,
  registeredUser: registeredUser,
});

export default rootReducer;
