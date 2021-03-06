import axios from "axios";

export default axios.create({
  baseURL: `https://austin-rey-cors-anywhere.herokuapp.com/https://trefle.io`,
  headers: {
    Authorization: process.env.REACT_APP_TREFLE_TOKEN,
  },
});
