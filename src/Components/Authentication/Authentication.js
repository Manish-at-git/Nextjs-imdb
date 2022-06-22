import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Alert } from "react-bootstrap";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./Authentication.css";
import { auth } from "../../firebase/firebase-config";

import { useDispatch, useSelector } from "react-redux";
import { loadSignIn, loadSignOut } from "../../redux/actions";

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
      console.log(errorMessage);
      setShow(true);
    }
  };
  console.log(errorMessage);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      setShow(false);

      // dispatch(loadSignIn(userLogged.email));
    } catch (error) {
      console.log(error.message);
      setShow(true);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="Auth">
      <Container>
        <Row className="auth-row">
          <Col lg={3}>
            <div className="Authentication">
              <div className="Register">
                <h5 className="register-user"> Create Account</h5>
                <input
                  className="auth-email"
                  placeholder="Email..."
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                />
                <input
                  className="auth-pass"
                  placeholder="Password..."
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />
                {console.log(registerEmail, registerPassword)}
                <button
                  className="auth-button"
                  onClick={() => {
                    register();
                    dispatch(loadSignIn(registerEmail));
                  }}
                >
                  {" "}
                  Create User
                </button>
              </div>

              <div className="Login">
                <h5 className="login-user"> Login </h5>
                <input
                  className="auth-email"
                  placeholder="Email..."
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                />
                <input
                  className="auth-pass"
                  placeholder="Password..."
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />

                <button
                  className="auth-button"
                  onClick={() => {
                    login();
                    dispatch(loadSignIn(registerEmail));
                  }}
                >
                  {" "}
                  Login
                </button>
              </div>

              <small className="logged-user"> User Logged In: </small>
              {userLogged?.email}

              <button
                className="auth-button"
                onClick={() => {
                  logout();
                  dispatch(loadSignOut());
                }}
              >
                {" "}
                Sign Out{" "}
              </button>

              <Alert show={show} variant="danger">
                <Alert.Heading>Error</Alert.Heading>
              </Alert>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Authentication;
