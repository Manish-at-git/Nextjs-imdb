import { NAVBARCLICKED, NAVBARTOGGLED } from "../actionTypes/actionTypes";

const initialState = {
  navbarToggle: true,
};

const navbarToggle = (state = initialState.navbarToggle, action) => {
  switch (action.type) {
    case NAVBARTOGGLED:
      return (initialState.navbarToggle = !state);
    case NAVBARCLICKED:
      return (initialState.navbarToggle = true);

    default:
      return state;
  }
};

export default navbarToggle;
