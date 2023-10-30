const DebuggerDuck = () => {
  return (
    <section className='w-full bg-base-300 h-screen mt-[-1px] overflow-hidden flex flex-col items-center justify-center'>
      <div className='mt-4 mb-8 p-4 bg-neutral rounded flex flex-col items-center transition-all duration-300'>
        <h2 className='mb-4 text-2xl font-semibold'>Hello there!</h2>
        <p className='mb-1 font-thin text-lg text-center'>
          I am Mr. Quack, and I will assist you with your debugging for this
          session.
          <br />
          Please explain me your code in an engaging manner, and it&apos;s ok to
          get passionate.
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-4'>
        <div className='p-12 pb-8 bg-neutral rounded flex flex-col items-center transition-all duration-300'>
          <img
            className='w-80 h-80 object-cover rounded'
            src='https://m.media-amazon.com/images/I/51VXgNZFIoL._AC_SL1424_.jpg'
            alt='duck'
          />
          <p className='mt-8 text-xl font-thin'>Whenever you are ready!</p>
        </div>
      </div>
      <div className='flex'>
        <button className='btn btn-accent rounded mx-12 p-2 mt-8 transition-all duration-300 justify-self-end'>
          I need a break! Help me relax.
        </button>
      </div>
    </section>
  );
};

export default DebuggerDuck;
