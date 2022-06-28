import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function ErrorHandler() {
  const error = useSelector((state) => state.error);
  return (
    <div
      style={{
        width: "100%",
        height: "30vh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "white",
          background: "tomato",
          padding: "8px 30px",
          borderRadius: "3px",
          // margin: "20px",
        }}
      >
        {error}
      </div>
      <div
        style={{
          padding: "8px 18px",
          borderRadius: "3px",
          // margin: "20px",/
        }}
      >
        <NavLink style={{ color: "grey" }} to={"/"}>
          Click Here to go to Home Page
        </NavLink>
      </div>
    </div>
  );
}

export default ErrorHandler;
