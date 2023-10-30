import { useState, useEffect } from 'react';

const NavBar = () => {
  const [name, setName] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    loggedIn
      ? (document.title = `Hello ${name}`)
      : (document.title = `Pondful of Ducks`);
  }, [name, loggedIn]);

  const toggleLoggedIn = () => {
    setLoggedIn((currentState) => !currentState);
  };

  return (
    <nav>
      <ul className='flex gap-6 pr-10 justify-end text-lg font-semibold'>
        <li className='hover:cursor-pointer'>Home</li>
        <li className='hover:cursor-pointer'>Add new Duck</li>
        {loggedIn ? (
          <li
            className='hover:cursor-pointer'
            onClick={() => {
              setName('');
              toggleLoggedIn();
            }}
          >
            Logout
          </li>
        ) : (
          <>
            <li
              className='hover:cursor-pointer'
              onClick={() => {
                setName('Lilian');
                toggleLoggedIn();
              }}
            >
              Login
            </li>
            <li
              className='hover:cursor-pointer'
              onClick={() => {
                setName('Lilian');
                toggleLoggedIn();
              }}
            >
              Register
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
