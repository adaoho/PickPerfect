import axios from "axios";

const PICKPERFECT_API = "http://server.adaoho-project.my.id";
const pickPerfectApi = axios.create({
  baseURL: PICKPERFECT_API,
});

export default pickPerfectApi;
// const PICKPERFECT_API = "http://localhost:3000";
