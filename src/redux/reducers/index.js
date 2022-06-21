import loadingReducer from "./loadingReducer";
import imageReducer from "./imageReducer";
import errorReducer from "./errorReducer";
import navbarToggle from "./navbarToggle";
import searchReducer from "./searchToggle";
import singleMovieImage from "./singleMovieImages";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: imageReducer,
  error: errorReducer,
  navbarToggle: navbarToggle,
  search: searchReducer,
  singleMovieImage: singleMovieImage,
});

export default rootReducer;
