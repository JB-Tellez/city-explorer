import { useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function App() {

  const [location, setLocation] = useState({display_name:''});
  const [searchQuery, setSearchQuery] = useState('');
  const [mapUrl, setMapUrl] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  async function fetchLocation() {

    try {
    const url = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
    const response = await axios.get(url);
    const locationObj = response.data[0];
    setLocation(locationObj);
    setMapUrl(`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${locationObj.lat},${locationObj.lon}&zoom=12`);
    } catch (error) {
      console.error('Fetching error', error);
      setErrorMessage(error.message);
    }
  }

  function updateQuery(event) {
    setSearchQuery(event.target.value);
  }


  return (
    <>
      <input onChange={updateQuery} />
      <button onClick={fetchLocation}>Explore!</button>
      {location.display_name && 
        <>
          <h2>The city is: {location.display_name}</h2>
          <h3>Coordinates are: {location.lat}, {location.lon}</h3>
        </>
      }
      <img src={mapUrl} alt={location.display_name && `"Image of selected location ${location.display_name}"`} />
      {errorMessage && <h2>Oh noes: {errorMessage}</h2>}
    </>
  )
}
