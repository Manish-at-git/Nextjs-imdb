import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./Authentication.css";
import { auth } from "../../firebase/firebase-config";

import { useDispatch, useSelector } from "react-redux";
import { loadRegister } from "../../redux/actions";
import { Alert } from "react-bootstrap";

function Authentication() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.register);
  // const singleImage = useSelector((state) => state.singleMovieImage);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [userLogged, setUserLogged] = useState({});
  const [show, setShow] = useState(false);
  let errorMessage;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserLogged(user);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      setShow(false);
    } catch (error) {
      errorMessage = error.message;
      console.log(error.message);
      setShow(true);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  let registerData = { registerEmail, registerPassword };

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        {console.log(registerEmail, registerPassword)}
        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {userLogged?.email}
      {/* {auth.currentUser.email} */}

      <button onClick={logout}> Sign Out </button>

      <Alert show={show} variant="danger">
        <Alert.Heading>{show ? errorMessage : null}</Alert.Heading>
      </Alert>
    </div>
  );
}

export default Authentication;
