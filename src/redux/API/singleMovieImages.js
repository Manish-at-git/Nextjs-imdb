const singleMovieImages = async (id) => {
  console.log(id, "saga");
  const response = await fetch(
    "https://imdb-api.com/en/API/Images/k_5n5e2r9a/tt1375666/Short"
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { singleMovieImages };
