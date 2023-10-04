import { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer } from 'react-leaflet';
import { DateTime } from 'luxon';

function App() {
  const [ipInfo, setIpInfo] = useState();
  const [countryInfo, setCountryInfo] = useState();
  const [dateTime, setDateTime] = useState(DateTime.local().c);

  useEffect(() => {
    const getApiData = async () => {
      const { data: ipData } = await axios(`
      https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_IP_API_KEY
      }`);
      const { data: countryData } = await axios(`
      https://restcountries.com/v3.1/alpha/${ipData.location.country}`);
      console.log(ipData);
      setIpInfo(ipData);
      setCountryInfo(countryData[0]);
    };

    getApiData();

    const startInterval = setInterval(
      () => setDateTime(DateTime.local().c),
      1000
    );

    return () => clearInterval(startInterval);
  }, []);

  return (
    countryInfo &&
    ipInfo && (
      <>
        <MapContainer
          center={[ipInfo.location.lat, ipInfo.location.lng]}
          zoom={13}
          className='h-screen'
          id='map'
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
        </MapContainer>
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99999999] card bg-base-100 shadow-xl rounded-xl overflow-hidden w-96'>
          <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />
          <div className='card-body text-center'>
            <h2 className='card-title block'>Your IP is: {ipInfo?.ip ?? ''}</h2>
            <p>
              You are currently located in {ipInfo.location.city},{' '}
              {countryInfo.name.common}
            </p>
            <hr className='my-2' />
            <p className='font-light'>
              <span role='img' aria-label='calendar emoji'>
                📅
              </span>
              Today is the{' '}
              {new Date(Date.now()).getDate().toString().padStart(2, '0')}.
              {new Date(Date.now()).getMonth().toString().padStart(2, '0')}.
              {new Date(Date.now()).getFullYear()}
            </p>
            <p className='font-light'>
              <span role='img' aria-label='clock emoji'>
                🕑
              </span>
              Your local time is {dateTime.hour.toString().padStart(2, '0')}:
              {dateTime.minute.toString().padStart(2, '0')}:
              {dateTime.second.toString().padStart(2, '0')}
            </p>
          </div>
        </div>
      </>
    )
  );
}

export default App;

/*
<div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99999999] card bg-base-100 shadow-xl rounded-xl overflow-hidden w-96'>
  <img src='' alt='' />
  <div className='card-body text-center'>
    <h2 className='card-title block'>Your IP is: -ipNum-</h2>
    <p>You are currently located in -cityName-, -countryName-</p>
    <hr className='my-2' />
    <p className='font-light'>
      <span role='img' aria-label='calendar emoji'>
        📅
      </span>
      Today is the -date- 
    </p>
    <p className='font-light'>
      <span role='img' aria-label='clock emoji'>
        🕑
      </span>
      Your local time is -time-
    </p>
  </div>
</div>
*/
