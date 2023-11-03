import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../components';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
