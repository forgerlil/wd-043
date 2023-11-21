import { useState } from 'react';

type User = {
  name: string;
  age: number | string;
  hobbies?: string[];
};

const ChildComponent = (userData: User) => {
  return (
    <>
      <div>
        Hello {userData.name}, you are {userData.age} years old and like to{' '}
        {userData.hobbies?.map((hobby) => (
          <span>{hobby} </span>
        ))}
      </div>
    </>
  );
};

const App = () => {
  const [user, setUser] = useState({
    name: 'Lilian',
    age: 34,
    hobbies: ['Coding', 'Gaming', 'Reading'],
  });

  return (
    <>
      <ChildComponent {...user} />
    </>
  );
};

export default App;
