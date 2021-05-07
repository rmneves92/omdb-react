import axios from "axios";

const apiKey = "395609b7";

const headers = {
  "Content-Type": "application/json",
};

const api = axios.create({
  baseURL: "http://www.omdbapi.com",
  headers,
  params: {
    apikey: apiKey,
  },
});

export default api;
