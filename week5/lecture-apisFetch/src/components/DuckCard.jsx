const DuckCard = ({ duckName, imgSrc, owner: { firstName, lastName } }) => {
  return (
    <div className='card w-96 bg-gray-900 h-[32rem] hover:scale-[1.02] hover:cursor-pointer transition-all'>
      <figure className='h-[70%] overflow-hidden'>
        <img src={imgSrc} alt='A rubber duck' className='object-cover' />
      </figure>
      <div className='card-body gap-6 text-center'>
        <h2 className='card-title'>
          {duckName === 'HRM The queen'
            ? `I am The queen! Tell me of your struggles, peasant.`
            : `My name is ${duckName}! Do you need my help with debugging?`}
        </h2>
        {duckName !== 'HRM The queen' && (
          <p>
            I am one of {firstName} {lastName}&apos;s trusty confidantes.
          </p>
        )}
      </div>
    </div>
  );
};

export default DuckCard;
