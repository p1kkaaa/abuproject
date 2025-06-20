import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // обязательно со слэшем на конце
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Добавляем токен ко всем исходящим запросам
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers = config.headers || {};
      // Если вы используете Simple JWT, префикс — Bearer
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Централизованная обработка ответов (например, обновление токена или logout)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // здесь можно попытаться обновить access по refresh-token
      // или вызвать logout и редирект на страницу логина
      // например:
      // const refresh = localStorage.getItem('refresh_token');
      // if (refresh) { ... }
    }
    return Promise.reject(error);
  }
);

export default api;
