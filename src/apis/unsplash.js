import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID IguKCVzTMwyWeOOb0sC5ebL6g-CCxiAVwxP5G3wbnQk",
  },
});
