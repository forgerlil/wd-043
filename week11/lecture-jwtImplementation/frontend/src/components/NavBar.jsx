import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { isAuth, setToken, setIsAuth, setUser } = useAuthContext();

  const handleLogout = () => {
    setToken(null);
    setIsAuth(false);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <nav>
      <ul className='flex gap-6 pr-10 justify-end text-lg font-semibold'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {isAuth ? (
          <>
            <li>
              <Link to='addDuck'>Add new Duck</Link>
            </li>
            <li className='hover:cursor-pointer' onClick={handleLogout}>
              Logout
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='login'>Login</Link>
            </li>
            <li>
              <Link to='register'>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
