import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Error from './components/Error';
import Loading from './components/Loading';
import { toPng } from 'dom-to-image';

const memeUrl = 'https://api.imgflip.com/get_memes';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [allMemes, setAllMemes] = useState();
  const [displayedMeme, setDisplayedMeme] = useState();
  const [currentMeme, setCurrentMeme] = useState(0);
  const [memeText, setMemeText] = useState({
    topText: '',
    bottomText: '',
  });
  // The useRef hook is used for values to which changes should not trigger a component to re-render.
  // Often, refs are also used to grab hold of dom elements (akin to document.querySelector), so we can
  // reference specific nodes or trigger functionalities specific to that node.
  // It always returns an object with a `current` property.
  const memeDiv = useRef();

  /**
   * useEffect to get all memes from API
   */
  useEffect(() => {
    const getMemes = async () => {
      try {
        const { data } = await axios(memeUrl);
        setAllMemes(data.data.memes);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
        setError(true);
      }
    };

    getMemes();
  }, []);

  /**
   * useEffect to change the displayed meme upon interaction
   */
  useEffect(() => {
    allMemes && setDisplayedMeme(allMemes[currentMeme]);
  }, [allMemes, currentMeme]);

  /**
   * Function to control inputs and keep in sync with state
   * @param event
   * @returns undefined
   */
  const handleInputChange = (e) => {
    setMemeText((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /**
   * Function to handle file uploads to display in the app
   * @param event
   * @returns undefined
   */
  const handleUpload = (e) => {
    if (!e.target.files[0]) return;

    console.dir(e.target.files[0]);

    const uploadedImgUrl = URL.createObjectURL(e.target.files[0]);

    setDisplayedMeme((prev) => ({
      ...prev,
      name: e.target.files[0].name,
      url: uploadedImgUrl,
    }));
  };

  /**
   * This function handles clicking on the save button to download the generated meme.
   * @param element Reference to the DOM element that displays the meme
   * @returns undefined
   */
  const handleSave = async (element) => {
    try {
      // We use the toPng function from the dom-to-image library to convert the div and all of the content inside into a .png. It returns a Promise object that we need to await.
      const convertToPng = await toPng(element);

      // We create an anchor tag and add to it a download attribute with a name, and the converted div image as the href
      const downloadLink = document.createElement('a');
      downloadLink.download = `memefied-${displayedMeme.name}.png`;
      downloadLink.href = convertToPng;

      // Clicking on the anchor tag with the download attribute will trigger the browser to download the href of that anchor
      downloadLink.click();

      // We have no further need for the anchor tag and we simply allow it to be destroyed at the end of this function.
    } catch (error) {
      console.error(error.msg);
      setLoading(false);
      setError(true);
    }
  };

  /**
   * This function handles resetting the form and image.
   * @returns undefined
   */
  const handleReset = () => {
    setDisplayedMeme(allMemes[currentMeme]);
    setMemeText({
      topText: '',
      bottomText: '',
    });
  };

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <main className='flex gap-20 justify-center items-center mt-24 h-[70vh]'>
      <div className='basis-1/2'>
        {/* JSX elements can have a ref attribute to allow us to bind that element to a useRef hook call */}
        <div ref={memeDiv} className='relative w-fit ml-auto overflow-hidden'>
          <img
            className='max-w-[40vw] max-h-[70vh] border-grey-200 border-2 rounded-lg p-4'
            src={displayedMeme?.url}
            alt={displayedMeme?.name}
          />
          <p className='font-bebas absolute top-10 w-full text-center max-w-[40vw] text-black text-3xl break-words px-6'>
            {memeText.topText}
          </p>
          <p className='font-bebas absolute bottom-10 w-full text-center max-w-[40vw] text-black text-3xl break-words px-6'>
            {memeText.bottomText}
          </p>
        </div>
      </div>
      <div className='basis-1/2'>
        <div className='flex flex-col gap-8 mb-10'>
          <h3 className='text-4xl mb-10'>{displayedMeme?.name}</h3>
          <div>
            <label htmlFor='topText-input' className='label'>
              <span className='label-text'>Top text</span>
            </label>
            <input
              id='topText-input'
              name='topText'
              placeholder='Add your top text here'
              className='input input-bordered w-full max-w-xs'
              value={memeText.topText}
              onChange={handleInputChange}
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
              value={memeText.bottomText}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex gap-4'>
            <button
              className='btn btn-primary'
              disabled={currentMeme <= 0}
              onClick={() => setCurrentMeme((prev) => prev - 1)}
            >
              Previous
            </button>
            <button
              className='btn btn-secondary'
              onClick={() => setCurrentMeme(Math.round(Math.random() * 100))}
            >
              Random
            </button>
            <button
              className='btn btn-primary'
              disabled={currentMeme >= allMemes.length - 1}
              onClick={() => setCurrentMeme((prev) => prev + 1)}
            >
              Next
            </button>
            {/* To the save button, we trigger the function on click, with a reference to the div that holds the meme and text */}
            <button
              className='btn btn-accent'
              onClick={() => handleSave(memeDiv.current)}
            >
              Save
            </button>
            <button className='btn btn-warning' onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <hr className='w-1/3 my-10 ml-6' />
        <div>
          <input
            type='file'
            className='file-input file-input-bordered w-full max-w-xs'
            onChange={handleUpload}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
