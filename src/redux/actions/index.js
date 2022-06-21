import {
  MOVIELISTDATA,
  NAVBARCLICKED,
  NAVBARTOGGLED,
  SEARCH,
  SINGLEMOVIE,
} from "../constants/constants";

const loadMovieList = (url) => {
  console.log("url:", url);
  return {
    type: MOVIELISTDATA.LOAD,
    url,
  };
};
const setMovieList = (data) => ({
  type: MOVIELISTDATA.LOAD_SUCCESS,
  data,
});
const setError = (error) => ({
  type: MOVIELISTDATA.LOAD_FAIL,
  error,
});

const loadSearch = (title) => {
  // console.log("url:", url);
  // console.log(title, "title");
  return {
    type: SEARCH.LOAD,
    title,
  };
};
const setSearchData = (data) => ({
  type: SEARCH.LOAD_SUCCESS,
  data,
});
const setSearchError = (error) => ({
  type: SEARCH.LOAD_FAIL,
  error,
});

const navbarToggle = (value) => ({
  type: NAVBARTOGGLED,
  value,
});

const navbarClicked = () => ({
  type: NAVBARCLICKED,
});

const loadSingleImages = (id) => ({
  type: SINGLEMOVIE.LOAD,
  id,
});

const setSingleImagesData = (data) => ({
  type: SINGLEMOVIE.LOAD_SUCCESS,
  data,
});

const setSingleImagesError = (error) => ({
  type: SINGLEMOVIE.LOAD_FAIL,
  error,
});

export {
  loadMovieList,
  setMovieList,
  setError,
  navbarToggle,
  navbarClicked,
  loadSearch,
  setSearchData,
  setSearchError,
  loadSingleImages,
  setSingleImagesData,
  setSingleImagesError,
};
