const formatTime = (videoTime) => {
  const minutesDuration = Math.floor(videoTime / 60)
    .toString()
    .padStart(2, '0');
  const secondsDuration = Math.floor(videoTime - minutesDuration * 60)
    .toString()
    .padStart(2, '0');

  return `${minutesDuration}:${secondsDuration}`;
};

export { formatTime };
