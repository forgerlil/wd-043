import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import DuckSection from '../components/DuckSection';

const MainPage = () => {
  const [allDucks, setAllDucks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getDuckData = await fetch(
          'https://duckpondapi.onrender.com/ducks'
        );
        if (!getDuckData.ok)
          throw new Error(
            'The request failed with a status of ' + getDuckData.status
          );
        const parsedDucks = await getDuckData.json();

        setAllDucks(parsedDucks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <DuckSection allDucks={allDucks} />
    </>
  );
};

export default MainPage;
