import { Navigate, Outlet } from 'react-router-dom';

const CheckoutLayout = ({ cart }) => {
  return cart.length ? <Outlet /> : <Navigate to='/' />;
};

export default CheckoutLayout;
