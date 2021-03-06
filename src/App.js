import "./App.css";

import ReactDOM from "react-dom/client";
import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import MovieList from "./Components/MovieList/MovieList";
import Home from "./WebPage/Home";

import configureStore from "./redux/store/store";
import Grid from "./Components/Grid/Grid";
import SingleMovie from "./Components/SingleMovie/SingleMovie";
import SignIn from "./Components/Authentication/SignIn";
import Register from "./Components/Authentication/register";
import Watchlist from "./Components/Watchlist/Watchlist";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":category" element={<MovieList />} />
            <Route path="/what-to-watch/:movies" element={<Grid />} />
            <Route path="/title/:id" element={<SingleMovie />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}
export default App;
