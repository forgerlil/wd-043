import { useState } from 'react';
import Error from './components/Error';
import Loading from './components/Loading';
import memePlaceholder from '/memePlaceholder.jpg';

const memeUrl = 'https://api.imgflip.com/get_memes';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <main className='flex gap-20 justify-center items-center mt-24 h-[70vh]'>
      <div className='relative basis-1/2'>
        <img
          className='max-w-[40vw] max-h-[70vh] border-grey-200 border-2 rounded-lg p-4 block ml-auto'
          src={memePlaceholder}
          alt=''
        />
        <p className='font-bebas absolute top-20 right-32 text-center max-w-[40vw] text-black text-3xl'>
          Meme top text here
        </p>
        <p className='font-bebas absolute bottom-10 right-32 text-center max-w-[40vw] text-black text-3xl'>
          Meme bottom text here
        </p>
      </div>
      <div className='basis-1/2'>
        <div className='flex flex-col gap-8 mb-10'>
          <h3 className='text-4xl mb-10'>Meme name here</h3>
          <div>
            <label htmlFor='topText-input' className='label'>
              <span className='label-text'>Top text</span>
            </label>
            <input
              id='topText-input'
              name='topText'
              placeholder='Add your top text here'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div>
            <label htmlFor='bottomText-input' className='label'>
              <span className='label-text'>Bottom text</span>
            </label>
            <input
              id='bottomText-input'
              name='bottomText'
              placeholder='Add your bottom text here'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='flex gap-4'>
            <button className='btn btn-primary'>Previous</button>
            <button className='btn btn-secondary'>Random</button>
            <button className='btn btn-primary'>Next</button>
            <button className='btn btn-accent'>Save</button>
          </div>
        </div>
        <hr className='w-1/3 my-10 ml-6' />
        <div>
          <input
            type='file'
            className='file-input file-input-bordered w-full max-w-xs'
          />
        </div>
      </div>
    </main>
  );
}

export default App;
