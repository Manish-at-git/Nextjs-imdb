import { SINGLEMOVIE } from "../actionTypes/actionTypes";

let dataImage = {};
let dataTrailer = {};

const singleMovieData = (state = [], action) => {
  if (action.type === SINGLEMOVIE.LOAD_SUCCESS) {
    state = [];

    return [...state, action.data];
  }
  return state;
};

export default singleMovieData;
