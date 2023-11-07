import { useNavigate } from 'react-router-dom';

const DuckCard = ({
  _id,
  duckName,
  imgSrc,
  owner: { firstName, lastName },
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/duck/${_id}`)}
      className='card w-96 bg-gray-900 h-[32rem] hover:scale-[1.02] hover:cursor-pointer transition-all'
    >
      <figure className='h-[70%] overflow-hidden'>
        <img src={imgSrc} alt='A rubber duck' className='object-cover' />
      </figure>
      <div className='card-body gap-6 text-center'>
        <h2 className='card-title'>
          My name is {duckName}! Do you need my help with debugging?
        </h2>
        <p>
          I am one of {firstName} {lastName}&apos;s trusty confidantes.
        </p>
      </div>
    </div>
  );
};

export default DuckCard;
