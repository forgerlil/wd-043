import { useState, useEffect } from 'react';

const NavBar = () => {
  const [name, setName] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect that runs only once, upon mount
  useEffect(() => {
    setTimeout(() => alert('An annoying popup :D'), 1000);
  }, []);

  // useEffects are scheduled to run once a component finishes, unlike values in the body of a component!
  console.log('Important log in our component');

  // useEffect that runs upon mount, or when either the loggedIn or name states change
  useEffect(() => {
    loggedIn
      ? (document.title = `Hello ${name}`)
      : (document.title = `Ducks in a pond`);
  }, [name, loggedIn]);

  // useEffects always run at least one. Conditionals inside the effect can go around that
  useEffect(() => {
    // loggedIn && setTimeout(() => toggleLoggedIn(), 3000);
    let timeoutId;
    if (loggedIn) {
      timeoutId = setTimeout(() => toggleLoggedIn(), 3000);
    }

    // Clean up function that gets called when a component updates or unmounts
    return () => clearTimeout(timeoutId);
  }, [loggedIn]);

  // useEffect and React Strict Mode
  useEffect(() => {
    console.log('useEffect is taking place!');

    return () => console.log('Component is updating/unmounting');
  }, []);

  const toggleLoggedIn = () => {
    setLoggedIn((currentState) => !currentState);
  };

  return (
    <nav>
      <div className='mr-10'>Hello {name ? name : 'there'}</div>
      <ul className='flex gap-6 pr-10 justify-end text-lg font-semibold'>
        <li className='hover:cursor-pointer'>Home</li>
        <li className='hover:cursor-pointer'>Add new Duck</li>
        {loggedIn ? (
          <li
            className='hover:cursor-pointer'
            onClick={() => {
              toggleLoggedIn();
              setName('');
            }}
          >
            Logout
          </li>
        ) : (
          <>
            <li
              className='hover:cursor-pointer'
              onClick={() => {
                setName('Nora');
                toggleLoggedIn();
              }}
            >
              Login
            </li>
            <li
              className='hover:cursor-pointer'
              onClick={() => {
                setName('Mochi');
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
