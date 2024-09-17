import axios from "axios";

const fetch = currentMovie =>
  axios.get(
    `http://www.omdbapi.com/?i=tt3896198&apikey=542581a7=${currentMovie}`
  );

const moviesApi = { fetch };
export default moviesApi;
