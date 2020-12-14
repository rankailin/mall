import axios from 'axios';

const appkey = 'Kaelin_1604742337354';
const instance = axios.create({

  baseURL: 'https://mallapi.duyiedu.com/goods/',
});
instance.interceptors.request.use((config) => ({
  ...config,
  params: {
    appkey,
    ...config.params,
  },
}));
instance.interceptors.response.use((response) => {
  // console.log(response);
  if (response.status === 'fail') {
    return Promise.reject(response.data.msg);
  }
  return response.data;
}, (error) => Promise.reject(error));
export default instance;
