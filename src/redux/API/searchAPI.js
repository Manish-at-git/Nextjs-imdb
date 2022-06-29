import { API_KEY } from "../../API_KEY";

const fetchSearch = async (title) => {
  const response = await fetch(
    `https://imdb-api.com/en/API/SearchTitle/${API_KEY}/${title}`
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchSearch };
