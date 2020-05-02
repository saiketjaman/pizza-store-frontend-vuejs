import axios from "axios";

const Api = axios.create({
  baseURL: "http://pizza-backend.oo/api"
});

export default Api;
