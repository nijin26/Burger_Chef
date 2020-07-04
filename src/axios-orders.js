import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burgerhub-daae2.firebaseio.com/",
});

export default instance;
