import { useState, useEffect, useRef } from 'react';
import {
  FaPause,
  FaPlay,
  FaVolumeUp,
  FaVolumeOff,
  FaExpandArrowsAlt,
} from 'react-icons/fa';
import { formatTime } from '../utils/formatTime';

const Video = ({ currentVideo }) => {
  const videoTag = useRef();
  const videoTimeSlider = useRef();
  const volume = useRef(0.5);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [runningTime, setRunningTime] = useState('00:00');
  const [fullTime, setFullTime] = useState('00:00');

  /**
   * useEffect to reset the slider's value to 0 when changing videos and scroll to the top of the page
   */
  useEffect(() => {
    scrollTo(0, 0);
    if (videoTimeSlider.current) videoTimeSlider.current.value = 0;
  }, [currentVideo]);

  /**
   * Function to play or pause the video based on whether the video is playing.
   * @params none
   * @returns void
   */
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);

    videoTag.current.paused
      ? videoTag.current.play()
      : videoTag.current.pause();
  };

  /**
   * Function to set some defaults when the video loads, like volume and displaying full runtime.
   * @params none
   * @returns void
   */
  const handleLoad = () => {
    videoTag.current.volume = volume.current.value;
    videoTimeSlider.current.max = videoTag.current.duration;
    const formattedDuration = formatTime(videoTag.current.duration);
    setFullTime(formattedDuration);
  };

  /**
   * Function to set the current running time of the video and move the input bar accordingly
   * @params none
   * @returns void
   */
  const handleTimeStamp = () => {
    const formattedTimestamp = formatTime(videoTag.current.currentTime);
    setRunningTime(formattedTimestamp);
    videoTimeSlider.current.value = videoTag.current.currentTime;
  };

  /**
   * Function to change the time of the video depending on the value of the slider for the video's running time
   * @params event - event handler
   * @returns void
   */
  const handleSkip = () => {
    videoTag.current.currentTime = videoTimeSlider.current.value;
  };

  /**
   * Function to change the volume of the video
   * @param event - event from the slider change
   * @returns void
   */
  const handleVolume = (e) => {
    videoTag.current.volume = +e.target.value;
  };

  /**
   * Function to toggle muting and unmuting the video
   * @params none
   * @returns void
   */
  const handleMute = () => {
    setIsMuted((prev) => {
      !prev
        ? (volume.current.value = 0)
        : (volume.current.value = videoTag.current.volume);

      return !prev;
    });

    videoTag.current.muted
      ? (videoTag.current.muted = false)
      : (videoTag.current.muted = true);
  };

  /**
   * Function to set the video to full screen, or exit it.
   * @params none
   * @returns void
   */
  const handleFullScreen = async () => {
    try {
      await videoTag.current.requestFullscreen();
      // await videoTag.current.requestPictureInPicture();
    } catch (error) {
      alert(`Error attempting to go fullscreen: ${error.message}`);
      console.error(error);
    }
  };

  return (
    <>
      <video
        ref={videoTag}
        src={currentVideo.sources}
        onLoadedData={handleLoad}
        onTimeUpdate={handleTimeStamp}
      ></video>
      {console.log(videoTag)}
      <div className='flex gap-1 items-center text-white'>
        <button
          className='bg-accent p-4 rounded-lg'
          aria-label='play pause toggle'
          onClick={handlePlayPause}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div className='text-lg font-semibold ml-6 my-2 flex-1 text-right'>
          <input
            ref={videoTimeSlider}
            className='range range-accent'
            type='range'
            defaultValue='0'
            min='0'
            onChange={handleSkip}
          />
          {runningTime} / {fullTime}
        </div>
        <div className='text-xl ml-6 flex items-center gap-3'>
          <div className='hover:cursor-pointer' onClick={handleMute}>
            {isMuted ? <FaVolumeOff /> : <FaVolumeUp />}
          </div>
          <input
            ref={volume}
            type='range'
            min='0'
            max='1'
            step='.05'
            defaultValue='0.5'
            className='range range-xs w-28'
            onChange={handleVolume}
          />
        </div>
        <div
          className='bg-accent p-4 rounded-lg hover:cursor-pointer'
          onClick={handleFullScreen}
        >
          <FaExpandArrowsAlt />
        </div>
      </div>
      <h2 className='text-3xl mt-4'>
        {currentVideo.title} - {currentVideo.subtitle}
      </h2>
    </>
  );
};

export default Video;
