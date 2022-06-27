const fetchSearch = async (title) => {
  console.log(title, "saga");
  const response = await fetch(
    `https://imdb-api.com/en/API/SearchTitle/k_fulo16js/${title}`
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchSearch };
