import { SIGNIN, SIGNOUT } from "../actionTypes/actionTypes";

const registeredUser = (state = [], action) => {
  if (action.type === SIGNIN) {
    console.log(action.payload, "reducer");
    return action.payload;
  } else if (action.type === SIGNOUT) {
    return (state = []);
  }
  return state;
};

export default registeredUser;
