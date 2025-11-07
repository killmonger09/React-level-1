import { useState, useEffect } from 'react'


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState('');


  // useEffect(() => {
  //   const savedCity =JSON.parse( localStorage.getItem('city') );
  //   setCity(savedCity);
  //   if (city) {
  //     fetchWeather(savedCity);
  //   }
    
  // },[]);

  // useEffect(() => {
  //   fetchWeather();
  // },[city])




  const fetchWeather = async ( cityName = city) => {

    console.log(cityName)

    const API_KEY = '31b0cc0a5dccdb1ef2cdb980ddded1eb';
    try {

      setError('')
      const response = await fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      ) 
      const data = await response.json();
      
      if(data.cod === "404") {
        setError("City not found");
        setWeather(null);
        return;
      }
      setWeather(data);
      localStorage.setItem('city', JSON.stringify(city));
      
    }
    catch (error){
      setError("not fetching data");
      console.error(error);
    }

  }

  return (
    <>
    <input 
    placeholder='search city'
    value={city}
    onChange={(e) => setCity(e.target.value)}
    />
    <button
    onClick={fetchWeather}>Search</button>
    {error && <p style={{ color: "red" }}>{error}</p>}
    {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>🌡️ {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬️ Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </>
  )
}

export default App
