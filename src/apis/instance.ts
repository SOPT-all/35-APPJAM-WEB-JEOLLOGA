import axios, { isAxiosError } from 'axios';

const API_URL = `${import.meta.env.VITE_APP_BASE_URL}`;

// 토큰이 필요없는 api 요청
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 토큰이 필요한 api 요청
export const privateInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

export const postRefreshToken = async () => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/refresh`,
      {
        id: localStorage.getItem('userId'),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          refreshToken: localStorage.getItem('refreshToken'),
        },
      },
    );
    return response;
  } catch (error) {
    if (isAxiosError(error)) throw error;
    else throw new Error();
  }
};

privateInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const {
      response: { status },
    } = error;

    if (status === 401) {
      try {
        const response = await postRefreshToken();

        if (response.status === 200) {
          const newAccessToken = response.headers.Authorization;
          localStorage.setItem('accessToken', newAccessToken);
        }
      } catch (error) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        console.error(error);
        alert('로그인 정보가 유효하지 않습니다.');
        window.location.replace('/');
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
