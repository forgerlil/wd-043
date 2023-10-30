import { toast } from 'react-toastify';

export const toastError = (message) =>
  toast.error(message, {
    closeOnClick: true,
    hideProgressBar: true,
    theme: 'colored',
    autoClose: 2000,
  });

export const toastSuccess = (message) =>
  toast.success(message, {
    closeOnClick: true,
    hideProgressBar: true,
    theme: 'colored',
    autoClose: 2000,
  });
