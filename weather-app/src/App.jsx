import { useState, useEffect } from 'react'

function App() {
   const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "31b0cc0a5dccdb1ef2cdb980ddded1eb";

  const fetchWeather = async (cityName = city) => {
    console.log(cityName)
    if (!cityName) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
        localStorage.setItem("city", JSON.stringify(cityName));
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  // 👇 Run on page load
  useEffect(() => {
    const savedCity = JSON.parse(localStorage.getItem("city"));
    if (savedCity) {
      setCity(savedCity);
      fetchWeather(savedCity);
    }
  }, []);

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

