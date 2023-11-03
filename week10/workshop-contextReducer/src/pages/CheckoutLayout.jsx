import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const CheckoutLayout = () => {
  const { cart } = useAppContext();
  return cart.length ? <Outlet /> : <Navigate to='/' />;
};

export default CheckoutLayout;
