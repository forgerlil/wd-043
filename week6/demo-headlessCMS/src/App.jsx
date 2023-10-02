import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DuckSection from './components/DuckSection';
import DebuggerDuck from './components/DebuggerDuck';
import Footer from './components/Footer';
import { getDucks } from './lib/contentfulClient';

const App = () => {
  const [allDucks, setAllDucks] = useState([]);

  useEffect(() => {
    getDucks()
      .then((duckData) => setAllDucks(duckData))
      .catch((error) => console.error(error));
  }, []);

  const triggerNewDuck = async () => {
    const duckName = prompt('Give your duck a name');
    const duckImg = prompt('What does your duck look like?');

    if (!duckName || !duckImg)
      return alert('Please fill in all info for your new duck!');

    fetch('https://duck-pond-server.cyclic.cloud/ducks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        duckName,
        imgSrc: duckImg,
      }),
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(
            'The request failed with a status of ' + response.status
          );
        return response.json();
      })
      .then((finalResult) => setAllDucks([...allDucks, finalResult]))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Header />
      <Hero />
      <DuckSection allDucks={allDucks} />
      <button
        className='btn btn-primary block mx-auto my-10'
        onClick={triggerNewDuck}
      >
        Add new Duck
      </button>
      <DebuggerDuck />
      <Footer />
    </>
  );
};

export default App;
