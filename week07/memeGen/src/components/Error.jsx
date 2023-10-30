const Error = () => {
  return (
    <div className='min-h-[70dvh]'>
      <h2 className='mt-32 text-center text-2xl'>
        Seems something went wrong :( Try again
      </h2>
      <button
        className='btn btn-primary block mx-auto mt-10'
        onClick={() => location.reload()}
      >
        Go back
      </button>
    </div>
  );
};

export default Error;
