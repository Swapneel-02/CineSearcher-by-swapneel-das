import axios from "axios";

const fetch = currentMovie =>
  axios.get(`https://www.omdbapi.com/?apikey=e4fc4dee&i=${currentMovie}`);

const moviesApi = { fetch };
export default moviesApi;
