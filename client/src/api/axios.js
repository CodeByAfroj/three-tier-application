// import axios from 'axios';

// const api = axios.create({
//   baseURL: '/api',
// });

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL: "", // same domain (ingress)
});

export default api;
