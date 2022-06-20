import axios from "axios";

const _http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {'PrivateKey': "medlink-apiv2.ecomedic.vn"}
    
  });

  export default _http;