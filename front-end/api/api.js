// Fetch ou Axios
import "dotenv/config";
import axios from "axios";

//const {NODE_ENV} = process.env.NODE_ENV;
//const URL = NODE_ENV === 'development' ? "http://localhost:3001/api" : "/api";
const URL = "https://spotify-i2ay.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
