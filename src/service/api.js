import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '213f597963ca958bdd3fa992f56dc364';

export const getTrending = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const getMoviesOnSearch = async (query, page = 1) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  console.log(data);
  return data;
};
