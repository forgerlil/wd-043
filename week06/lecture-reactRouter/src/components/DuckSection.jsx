import DuckCard from './DuckCard';

const DuckSection = ({ allDucks }) => {
  return (
    <section id='ducks'>
      <h2 className='text-3xl text-center my-16 mb-10'>
        <span role='img' aria-label='two ducks in a row'>
          {' '}
          🦆🦆{' '}
        </span>
        Our duck selection
        <span role='img' aria-label='two ducks in a row'>
          {' '}
          🦆🦆{' '}
        </span>
      </h2>
      <div id='duckCards' className='flex flex-wrap gap-4 justify-center p-10'>
        {allDucks.map((duck) => (
          <DuckCard key={duck._id} {...duck} />
        ))}
      </div>
    </section>
  );
};

export default DuckSection;
