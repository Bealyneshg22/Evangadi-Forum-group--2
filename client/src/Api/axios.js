import axios from "axios";
const instance = axios.create({
  baseURL: "https://evangadi-forum-group-2.onrender.com/api",
});
export default instance;
