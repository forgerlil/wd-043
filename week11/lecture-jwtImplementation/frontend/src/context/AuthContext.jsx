import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { toastError } from '../lib/toastify';

const AuthContextObj = createContext();

export const useAuthContext = () => useContext(AuthContextObj);

const AuthContext = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const validateToken = async () => {
    try {
      const { data } = await axios('https://duckpondapi.onrender.com/auth/me', {
        headers: { Authorization: token },
      });
      setIsAuth(true);
      setUser(data);
    } catch (error) {
      setIsAuth(false);
      setUser(null);
      toastError(error.message);
    }
  };

  useEffect(() => {
    token && validateToken();
  }, [token]);

  return (
    <AuthContextObj.Provider
      value={{ token, setToken, isAuth, setIsAuth, user, setUser }}
    >
      {children}
    </AuthContextObj.Provider>
  );
};

export default AuthContext;
