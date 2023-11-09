import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { toastError, toastSuccess } from '../lib/toastify';
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { setToken, isAuth } = useAuthContext();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const { headers } = await axios.post(
        'https://duckpondapi.onrender.com/auth/login',
        form
      );
      localStorage.setItem('token', headers.authorization);
      setToken(headers.authorization);
      toastSuccess('Welcome back!');
      setTimeout(() => navigate('/'), 1000);
    } catch (error) {
      toastError(error.response.data.error);
    }
  };

  if (isAuth) return <Navigate to='/' />;

  return (
    <div className='mt-[-1px] w-full h-screen flex items-center justify-center'>
      <form
        onSubmit={handleLogin}
        autoComplete='off'
        className='flex flex-col items-center justify-between bg-base-300 pt-4 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 2xl:w-1/3 transition-all'
      >
        <h1 className='mt-2 mb-8 lg:mb-16 text-2xl font-semibold text-white'>
          Login
        </h1>
        <div className='flex flex-col items-center justify-around h-1/2 w-full text-white'>
          <input
            type='text'
            placeholder='E-mail'
            name='email'
            value={form.email}
            onChange={handleChange}
            className='w-3/5 mb-8 p-2 outline-none border-b border-transparent focus:border-slate-100 bg-slate-500 rounded transition-all'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={form.password}
            onChange={handleChange}
            className='w-3/5 mb-8 p-2 outline-none border-b border-transparent focus:border-slate-100 bg-slate-500 rounded transition-all'
          />
        </div>
        <br />
        <div className='flex w-full'>
          <button className='w-1/2 bg-accent hover:bg-info-content hover:border-info-content rounded-none text-white font-normal text-lg p-4 transition-none uppercase'>
            Register
          </button>
          <button className='w-1/2 bg-success hover:bg-success-content hover:border-success-content rounded-none text-white font-normal text-lg py-4 transition-none uppercase'>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
