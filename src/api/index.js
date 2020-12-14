import axios from '@/axios';
import URLS from './urls';

const api = {
  getsidebar(type) {
    return axios.get(URLS.getsidebar, {
      params: {
        type,
      },
    });
  },
  getGoodsList(type, page, size, sort) {
    return axios.get(URLS.getGoodsList, {
      params: {
        type,
        page,
        size,
        sort,
      },
    });
  },
  getLikeSearchList(likeValue) {
    return axios.get(URLS.likeSearch, {
      params: {
        likeValue,
      },
    });
  },
  getSerachWord(type, page, size) {
    return axios.get(URLS.search, {
      params: {
        type,
        page,
        size,
      },
    });
  },
  getGoodsByIds(value) {
    return axios.get(URLS.getGoodsByIds, {
      params: {
        value,
      },
    });
  },
};
export default api;
