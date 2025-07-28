import axios from 'axios';

// --- PERUBAHAN DI SINI ---
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
// -------------------------

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Tangani error global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// 📝 Auth APIs
export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await api.post('/login', credentials);
  return response.data;
};

export const registerUser = async (userData: { name: string; email: string; password: string }) => {
  const response = await api.post('/register', userData);
  return response.data;
};

// 📰 News APIs
export const getAllNews = async () => {
  try {
    const response = await api.get('/news');
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export const getUserNews = async () => {
  const response = await api.get('/news/my-news');
  return response.data;
};

export const getNewsById = async (id: string) => {
  const response = await api.get(`/news/${id}`);
  return response.data;
};

export const deleteNews = async (id: string) => {
  const response = await api.delete(`/news/${id}`);
  return response.data;
};


export const createNews = async (newsData: FormData) => {
  const response = await api.post('/news', newsData, {
    headers: {
      'Content-Type': 'multipart/form-data', // override
    },
  });
  return response.data;
};


export const updateNews = async (id: string, newsData: FormData) => {
  const response = await api.put(`/news/${id}`, newsData, {
    headers: {
      'Content-Type': 'multipart/form-data', // override
    },
  });
  return response.data;
};

export default api;