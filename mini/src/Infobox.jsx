import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Infobox.css';

export default function Infobox({ info }) {
  const init_img = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=60";
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60";
  const COLD_URL = "https://images.unsplash.com/photo-1577457943926-11193adc0563?w=600&auto=format&fit=crop&q=60";
  const RAIN_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=600&auto=format&fit=crop&q=60";

  const image =
    info.weather.toLowerCase().includes('rain') ? RAIN_URL :
    info.temp > 30 ? HOT_URL :
    info.temp < 10 ? COLD_URL :
    init_img;

  return (
    <Card className="info-card">
      <CardMedia component="img" image={image} alt="Weather" />

      <CardContent>
        <Typography className="city-title" variant="h5">
          <LocationOnIcon />
          {info.city || 'Weather'}
        </Typography>

        <p className="weather-condition">
          {info.weather || 'No weather data'}
        </p>

        <div className="weather-stats">
          <div className="stat-item highlight">
            <span className="stat-label">Temperature</span>
            <span className="stat-value">{info.temp}°C</span>
          </div>

          <div className="stat-item">
            <span className="stat-label">Feels like</span>
            <span className="stat-value">{info.feels_like}°C</span>
          </div>

          <div className="stat-item">
            <span className="stat-label">Humidity</span>
            <span className="stat-value">{info.humidity}%</span>
          </div>

          <div className="stat-item">
            <span className="stat-label">Minimum</span>
            <span className="stat-value">{info.temp_min}°C</span>
          </div>

          <div className="stat-item">
            <span className="stat-label">Maximum</span>
            <span className="stat-value">{info.temp_max}°C</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}