import { MOVIELISTDATA } from "../actionTypes/actionTypes";

const movielist = (state = [], action) => {
  if (action.type === MOVIELISTDATA.LOAD_SUCCESS) {
    state = [];
    {
      console.log(action.data);
    }
    return [...state, { ...action.data }];
  }
  return state;
};

export default movielist;
