import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-ff239-default-rtdb.firebaseio.com/",
});

export default instance;
