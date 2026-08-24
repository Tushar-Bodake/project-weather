import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css';
import { useState } from 'react';


export default function Searchbox({updateInfo}){
  
  let [city, setCity] = useState(" ");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
  const API_KEY = "eccce005d223489d888cb716d172ec59";
  
    let handleChange = (evt) => {
      console.log(evt.target.value);
      setCity(evt.target.value);
    };

    let handleSearch = async (evt) => {
      evt.preventDefault();
      setError(false);
      console.log(city);
      setCity(" ");
      try {
        let newInfo = await fetchData();
        updateInfo(newInfo);
      } catch (err) {
        setError(true);
      }
    };

    let fetchData = async () => {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error(`City not found: ${response.status}`);
      }
      let jsonData = await response.json();
      console.log(jsonData);

      let result = {
        city: jsonData.name,
        feels_like: jsonData.main.feels_like,
        temp: jsonData.main.temp,
        humidity: jsonData.main.humidity,
        temp_min: jsonData.main.temp_min,
        temp_max: jsonData.main.temp_max,
        weather: jsonData.weather[0].description
      };
      console.log(result);
      return result;
    };


    return (
        <div className="search-box">

         <TextField
          required
          id="outlined-required"
          label="City name"
          value={city}
          onChange={handleChange}
        />

          <Button 
          type="submit"
          variant="contained" 
          className="search-btn"
          onClick={handleSearch}>
            Search City
          </Button>

          {error && <p className="search-error">No such place exists</p>}
 
        </div>
    );
}