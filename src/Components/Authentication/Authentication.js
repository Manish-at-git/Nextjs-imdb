import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Alert } from "react-bootstrap";

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import "./Authentication.css";
import { auth } from "../../firebase/firebase-config";

import { useDispatch, useSelector } from "react-redux";
import { loadSignIn } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

let errorMsg;

function Authentication() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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

  const login = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      console.log(user);
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

                {console.log(loginEmail)}
                <button
                  className="auth-button"
                  onClick={() => {
                    login();
                    dispatch(loadSignIn(loginEmail));
                  }}
                >
                  {" "}
                  Login
                </button>
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

export default Authentication;
