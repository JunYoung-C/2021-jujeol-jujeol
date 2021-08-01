import axios, { AxiosRequestConfig, Method } from 'axios';
import { LOCAL_STORAGE_KEY, REQUEST_URL } from 'src/constants';
import { getLocalStorageItem } from 'src/utils/localStorage';

axios.defaults.baseURL = process.env.SNOWPACK_PUBLIC_API_URL;

const isNoAuthorizationRequired = (path: string) => {
  return [REQUEST_URL.LOGIN, REQUEST_URL.GET_DRINKS].includes(path);
};

const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await axios(config);

    return response.data;
  } catch ({ response }) {
    throw response.data;
  }
};

axios.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization || isNoAuthorizationRequired(config.url as string)) {
      const token = getLocalStorageItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const API = {
  login: <T>(data: T) => {
    return request({ method: 'POST' as Method, url: REQUEST_URL.LOGIN, data });
  },
  getUserInfo: () => {
    return request({ method: 'GET' as Method, url: REQUEST_URL.GET_USER_INFO });
  },

  getDrinks: ({ page, params }: { page: number; params?: URLSearchParams }) => {
    return request({
      method: 'GET' as Method,
      url: REQUEST_URL.GET_DRINKS + '?page=' + page + (params ? '&' + params.toString() : ''),
    });
  },
  getRecommendedDrinks: () => {
    return request({
      method: 'GET' as Method,
      url: REQUEST_URL.GET_RECOMMENDED_DRINKS,
    });
  },
  getDrink: <T>(id: T) => {
    return request({ method: 'GET' as Method, url: `${REQUEST_URL.GET_DRINK}/${id}` });
  },
  getReview: <T>({ id, page }: { id: T; page: number }) => {
    return request({ method: 'GET' as Method, url: `/drinks/${id}/reviews` + '?page=' + page });
  },
  postReview: <I, D>(id: I, data: D) => {
    return request({ method: 'POST' as Method, url: `/drinks/${id}/reviews`, data });
  },
  editReview: <I, D>(drinkId: I, reviewId: I, data: D) => {
    return request({
      method: 'PUT' as Method,
      url: `/drinks/${drinkId}/reviews/${reviewId}`,
      data,
    });
  },
  deleteReview: <I>(drinkId: I, reviewId: I) => {
    return request({ method: 'DELETE' as Method, url: `/drinks/${drinkId}/reviews/${reviewId}` });
  },

  postPreference: <I, D>(id: I, data: D) => {
    return request({ method: 'PUT' as Method, url: `/members/me/drinks/${id}/preference`, data });
  },
  deletePreference: <I>(id: I) => {
    return request({ method: 'DELETE' as Method, url: `/members/me/drinks/${id}/preference` });
  },

  getPersonalReviews: <T>({ page, size }: { page?: T; size?: T }) => {
    return request({
      method: 'GET' as Method,
      url: `/members/me/reviews?page=${page ?? ''}&size=${size ?? ''}`,
    });
  },
  getPersonalDrinks: <T>({ page, size }: { page?: T; size?: T }) => {
    return request({
      method: 'GET' as Method,
      url: `/members/me/drinks?page=${page ?? ''}&size=${size ?? ''}`,
    });
  },

  getSearchResult: <S>({
    words: search,
    category,
    page,
  }: {
    words?: S;
    category?: string;
    page?: number;
  }) => {
    return request({
      method: 'GET' as Method,
      url: `/drinks?search=${search ?? ''}&category=${category ?? ''}&page=${page ?? 1}`,
    });
  },
};
export default API;