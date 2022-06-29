import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Alert } from "react-bootstrap";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

import "./register.css";

import { useDispatch, useSelector } from "react-redux";
import { loadSignIn, loadSignOut } from "../../redux/actions";
import { useNavigate, NavLink } from "react-router-dom";

let errorMsg;

function Register() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.registeredUser);

  const navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [userLogged, setUserLogged] = useState({});
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMEssage] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserLogged(user);
    });
  }, []);

  const showError = (error) => {
    let authError = error.message;
    let errorSplit = authError.split("/");
    let errorSplitString = errorSplit[1].toString();
    let errorMessageList = errorSplitString.split(")");
    errorMsg = errorMessageList[0].toString();
    setErrorMEssage(errorMsg);
  };
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      // console.log(user);
      setShow(false);
      navigate("/");
    } catch (error) {
      showError(error);
      setShow(true);
    }
  };

  return (
    <div className="Auth">
      <Container>
        <Row className="auth-row">
          <Col lg={3}>
            <div className="Authentication">
              <div className="Register">
                <h5 className="register-user"> Create Account Register</h5>
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
                {/* {console.log(errorMessage, "errorMessagejsx")} */}
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
              <hr className="hr" />
              <div className="already-account">
                <span>
                  Already have an account?{" "}
                  <NavLink to="/signin" className="signin-link">
                    Sign In
                  </NavLink>
                </span>
              </div>
              <Alert show={show} variant="danger">
                <Alert.Heading>{errorMessage}</Alert.Heading>
              </Alert>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
