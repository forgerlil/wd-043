import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../components';

const MainLayout = ({ cart }) => {
  return (
    <>
      <NavBar cart={cart} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
