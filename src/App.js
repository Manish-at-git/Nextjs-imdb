import Navbar from "./Navbar/Navbar";
import MoviePick from "./Components/MoviePick/MoviePick";
import Card from "./Components/Cards/Card";
import LP from "./Components/Cards/Card";
import Slider from "./Components/Slider/Slider";
import CarouselCard from "./Components/Slider/CarouselCard/CarouselCard";

import MovieList from "./Components/MovieList/MovieList";
import SingleMovie from "./Components/SingleMovie/SingleMovie";
import "swiper/css/bundle";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <MoviePick />
      {/* <Card /> */}
      {/* <CarouselCard /> */}
      {/* <MovieList /> */}
      {/* <SingleMovie /> */}
    </div>
  );
}

export default App;
