import axios from "axios";

export default axios.create({
  baseURL: "https://coloc-meet-back.herokuapp.com",
});
