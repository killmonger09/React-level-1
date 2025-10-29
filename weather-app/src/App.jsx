import { useState } from 'react'

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("")


  const API_KEY = "31b0cc0a5dccdb1ef2cdb980ddded1eb";

  const fetchWeather = async () => {
    try {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === '404') {
        setError("City not found");
        setWeather(null);
      }
      setWeather(data);
    }
    catch (error) {
      console.error(err)
    }
  };

  return (
    <>
     <input 
     placeholder='search city'
     value={city}
     onChange={(e) => setCity(e.target.value)}
     />
     <button
     onClick={fetchWeather}
     >Search</button>

    {error && <p style = {{color : "red"}} >{error}</p>}

    {weather && (
      <div>
        <h3>{weather.name}</h3>
        <p>{weather.main.temp}°C</p>
        <p> Humidity: {weather.main.humidity}%</p>
        <p>Wind speed: {weather.wind.speed} m/s</p>
        
      </div>
    )} 
    </>
  )
}

export default App

