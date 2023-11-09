import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const AddDuckLayout = () => {
  const { isAuth } = useAuthContext();
  return isAuth ? <Outlet /> : <Navigate to='/' />;
};

export default AddDuckLayout;
