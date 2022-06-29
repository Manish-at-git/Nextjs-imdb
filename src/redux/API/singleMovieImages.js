import { API_KEY } from "../../API_KEY";

const singleMovieImages = async (id) => {
  const responseImage = await fetch(
    `https://imdb-api.com/en/API/Images/${API_KEY}/${id}/Short`
  );
  const dataImage = await responseImage.json();
  if (responseImage.status >= 400) {
    throw new Error(dataImage.errors);
  }

  const responseTrailer = await fetch(
    `https://imdb-api.com/en/API/Trailer/${API_KEY}/${id}`
  );
  const dataTrailer = await responseTrailer.json();
  if (responseTrailer.status >= 400) {
    throw new Error(dataTrailer.errors);
  }
  return { imagesData: dataImage, trailerdata: dataTrailer };
};

export { singleMovieImages };
