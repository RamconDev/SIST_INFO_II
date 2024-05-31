import axios from "axios";

const axiosFecth = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    App: "MUNDOVINYL",
  },
});
export default axiosFecth;
