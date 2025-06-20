import { createContext, useContext, useState, useEffect } from 'react';
import api from '../service/axiosConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const response = await api.get('users/me/');
          setUser(response.data);
        } catch (err) {
          console.error('Failed to load user:', err.response?.data);
          logout();
        }
      }
      setIsLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('auth/login/', { email, password });
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      setUser(response.data.user);
      return response.data;
    } catch (err) {
      console.error('Login error:', err.response?.data);
      setError(err.response?.data?.detail || 'Ошибка входа. Проверьте данные и попробуйте снова.');
      throw err;
    }
  };

  const register = async (userData) => {
    try {
      const response = await api.post('auth/register/', userData);
      return response.data;
    } catch (err) {
      console.error('Registration error:', err.response?.data);
      setError(JSON.stringify(err.response?.data));
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
