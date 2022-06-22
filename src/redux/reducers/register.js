import { REGISTER } from "../constants/constants";
import { auth } from "../../firebase/firebase-config";

let email = auth.currentUser.email;

const register = (state = [], action) => {
  console.log(action, "reducer");
  if (action.type === REGISTER.LOAD_SUCCESS) {
    // let email = action.payload.user.email;
    // state = [];
    // {
    // //   console.log(email, "reducer email");
    // }
    console.log(email, "return reduer");
    return email;
  }
  return state;
};

export default register;
