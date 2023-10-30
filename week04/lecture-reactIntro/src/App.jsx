import Header from './components/Header';
import Hero from './components/Hero';
import DuckSection from './components/DuckSection';
import DebuggerDuck from './components/DebuggerDuck';
import Footer from './components/Footer';

const App = () => {
  const allDucks = [
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
  ];

  return (
    <>
      <Header />
      <Hero />
      <DuckSection allDucks={allDucks} />
      <DebuggerDuck />
      <Footer />
    </>
  );
};

export default App;
