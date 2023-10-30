import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DuckSection from './components/DuckSection';
import DebuggerDuck from './components/DebuggerDuck';
import Footer from './components/Footer';

const App = () => {
  const [allDucks, setAllDucks] = useState([
    {
      id: crypto.randomUUID(),
      duckName: 'Mr. Quackers',
      imgSrc: 'https://m.media-amazon.com/images/I/51VXgNZFIoL._AC_SL1424_.jpg',
      clickFn: () => alert(`You clicked on Mr. Quackers`),
    },
    {
      id: crypto.randomUUID(),
      duckName: 'HRM The queen',
      imgSrc: 'https://m.media-amazon.com/images/I/51B1yl6SOkL._SL1000_.jpg',
      clickFn: () => alert('You dare click on the queen? Off with your head!'),
    },
  ]);

  const triggerNewDuck = () => {
    const duckName = prompt('Give your duck a name');
    const duckImg = prompt('What does your duck look like?');

    if (!duckName || !duckImg)
      return alert('Please fill in all info for your new duck!');

    const newDucks = [
      ...allDucks,
      {
        id: crypto.randomUUID(),
        duckName,
        imgSrc: duckImg,
        clickFn: () => alert(`You clicked on ${duckName}`),
      },
    ];

    console.log(allDucks);
    setAllDucks(newDucks);
    console.log(allDucks);
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
