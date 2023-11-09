import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toastSuccess, toastError } from '../lib/toastify';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

const AddDuck = () => {
  const navigate = useNavigate();
  const { token, user } = useAuthContext();
  const [formState, setFormState] = useState({
    duckName: '',
    imgSrc: '',
    quote: '',
  });

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const triggerNewDuck = async (e) => {
    try {
      e.preventDefault();

      let isValid = true;

      if (!formState.duckName) {
        toastError('The name for a duck is required');
        isValid = false;
      }
      if (!formState.imgSrc) {
        toastError('The image for a duck is required');
        isValid = false;
      }

      if (!isValid) throw new Error('Invalid form');

      const { status } = await axios.post(
        'https://duckpondapi.onrender.com/ducks',
        { ...formState, owner: user._id },
        { headers: { Authorization: token } }
      );

      if (status === 201) {
        toastSuccess('Duck added');
        setTimeout(() => navigate('/'), 1500);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='mt-[-1px] w-full h-screen flex items-center justify-center'>
      <form
        onSubmit={triggerNewDuck}
        autoComplete='off'
        className='flex flex-col items-center justify-between bg-base-300 pt-4 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 transition-all'
      >
        <h1 className='mt-2 mb-8 lg:mb-16 text-xl font-semibold text-center text-white p-2 sm:p-4 lg:p-8'>
          Another duck rises to the debugging call? Please list it here:
        </h1>
        <div className='flex flex-col items-center justify-around h-1/2 w-2/3 mb-8 text-white'>
          <input
            type='text'
            placeholder="Duck's Name"
            name='duckName'
            value={formState.duckName}
            onChange={handleChange}
            className='w-4/5 mb-2 sm:mb-4 lg:mb-8 p-2 outline-none border-b border-transparent focus:border-slate-400 dark:focus:border-slate-100 dark:bg-slate-500 rounded transition-all'
          />
          <input
            type='text'
            placeholder='Duck photo URL'
            name='imgSrc'
            value={formState.imgSrc}
            onChange={handleChange}
            className='w-4/5 mb-2 sm:mb-4 lg:mb-8 p-2 outline-none border-b border-transparent focus:border-slate-400 dark:focus:border-slate-100 dark:bg-slate-500 rounded transition-all'
          />
          <input
            type='text'
            placeholder="Duck's favorite quote"
            name='quote'
            value={formState.quote}
            onChange={handleChange}
            className='w-4/5 mb-2 sm:mb-4 lg:mb-8 p-2 outline-none border-b border-transparent focus:border-slate-400 dark:focus:border-slate-100 dark:bg-slate-500 rounded transition-all'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-success hover:bg-success-content hover:border-success-content rounded-none text-white font-normal text-lg p-4  uppercase'
        >
          Join the fray
        </button>
      </form>
    </div>
  );
};

export default AddDuck;
