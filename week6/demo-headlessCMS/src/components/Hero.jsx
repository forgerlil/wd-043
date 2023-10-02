const Hero = () => {
  return (
    <section id='hero' className='hero min-h-[75vh] bg-base-300'>
      <div className='hero-content flex-col lg:flex-row lg:gap-12'>
        <img
          src='https://img.cdn-pictorem.com/uploads/collection/O/OA8RCH8DHG/900_2111187HighRes.jpg'
          className='rounded-lg max-w-sm lg:max-w-none lg:w-1/2'
          alt='Rubber ducks in a row entering a pond'
        />
        <div className='text-center lg:text-start flex flex-col lg:justify-center items-center lg:items-start'>
          <h1 className='text-5xl font-bold'>Pondful of Ducks</h1>
          <p className='py-6 max-w-[70ch] text-lg'>
            Here you have a selection of duck friends to help you <i>pond</i>er
            about your coding doubts and questions. May you find the debugging
            friend you need.
          </p>
          <button className='btn btn-success w-fit text-lg'>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
