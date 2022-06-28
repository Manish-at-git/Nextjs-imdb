import React from "react";
import { useSelector } from "react-redux";

import { API_KEY } from "../API_KEY";
import MoviePick from "../Components/MoviePick/MoviePick";
import SignIn from "../Components/SignIn/SignIn";

function Home() {
  const signedIn = useSelector((state) => state.registerUser);

  return (
    <div>
      <MoviePick
        heading="What To Watch"
        recommend="Get More Recommendations"
        title="Box Office of All Time"
        text="TV Shows and Movies just for you"
        url="https://imdb-api.com/en/API/BoxOffice/k_67o8cg68"
      />
      <MoviePick
        heading=""
        recommend=""
        title="In Theatre"
        text="TV Shows and Movies just for you"
        url="https://imdb-api.com/en/API/Top250Movies/k_67o8cg68"
      />
      <SignIn />
      <MoviePick
        heading=""
        recommend=""
        title="Top Movies"
        text="TV Shows and Movies just for you"
        url={`https://imdb-api.com/en/API/Top250Movies/${API_KEY}`}
      />
    </div>
  );
}

export default Home;
