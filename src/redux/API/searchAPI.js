const fetchSearch = async (title) => {
  console.log(title, "saga");
  const response = await fetch(
    `https://imdb-api.com/en/API/SearchTitle/k_5n5e2r9a/${title}`
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchSearch };
