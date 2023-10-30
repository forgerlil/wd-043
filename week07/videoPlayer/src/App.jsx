import { useState } from 'react';
import allVideos from './videos.json';
import Video from './components/Video';
import VideoThumbnail from './components/VideoThumbnail';

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(allVideos[0]);

  return (
    <main className='flex max-w-[1260px] mx-auto px-6 py-20 gap-10'>
      <section>
        <Video currentVideo={currentVideo} />
      </section>
      <section className='w-1/2 bg-base-300 rounded flex flex-col gap-4 flex-wrap'>
        {allVideos.map((video) => (
          <VideoThumbnail
            key={crypto.randomUUID()}
            video={video}
            setCurrentVideo={setCurrentVideo}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
