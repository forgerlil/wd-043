import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className='flex gap-6 pr-10 justify-end text-lg font-semibold'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='addDuck'>Add new Duck</Link>
        </li>
        <li>
          <Link to='login'>Login</Link>
        </li>
        <li>
          <NavLink
            to='register'
            style={({ isActive }) => ({ color: isActive && 'red' })}
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
