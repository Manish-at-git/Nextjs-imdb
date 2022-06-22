import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/firebase-config";

const fetchImages = async (url) => {
  console.log(url, "saga");
  const response = await fetch(url);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const register = async (payload) => {
  let user;
  try {
    console.log(payload, "ASDFGHJKDFGHJKASDFGHJSDFGHJK");
    const { registerEmail, registerPassword } = payload;
    console.log(
      registerPassword,
      registerEmail,
      "ASDFGHJKDFGHJKASDFGHJSDFGHJK"
    );
    user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
  } catch (error) {
    console.log(error.message);
  }
  console.log(user, "API user");
  return user;
};

export { register };
