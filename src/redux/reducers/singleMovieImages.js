import { SINGLEMOVIE } from "../constants/constants";

const singleMovieImage = (state = [], action) => {
  if (action.type === SINGLEMOVIE.LOAD_SUCCESS) {
    state = [];
    {
      console.log(action.data);
    }
    return [...state, { ...action.data }];
  }
  return state;
};

export default singleMovieImage;
