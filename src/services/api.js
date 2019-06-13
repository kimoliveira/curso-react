import axios from "axios";

const api = axios.create({
  baseURL: "https://focanotreino.commercesuite.com.br/web_api"
});

export default api;
