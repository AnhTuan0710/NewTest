import axios from "axios";

const token = localStorage.getItem('access_token')

const _http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    authorization: token?token:""
  }
  });

export default _http;