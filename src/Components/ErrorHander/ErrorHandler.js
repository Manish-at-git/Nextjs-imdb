import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./ErrorHandler.module.css";

function ErrorHandler() {
  const error = useSelector((state) => state.error);
  return (
    <div style={styles.ErrorHandler_main}>
      <div style={styles.ErrorHandler_error}>{error}</div>
      <div style={styles.ErrorHandler_link}>
        <NavLink style={styles.ErrorHandler_navlink} to={"/"}>
          Click Here to go to Home Page
        </NavLink>
      </div>
    </div>
  );
}

export default ErrorHandler;
