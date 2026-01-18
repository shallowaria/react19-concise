import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

function ForecastListItem({ weatherForecast }) {
  return (
    <ListItem key={weatherForecast.id}>
      <ListItemAvatar>
        <Avatar>
          <img width={48} src={weatherForecast.weatherIcon} alt="" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={weatherForecast.weather}
        secondary={weatherForecast.date.split(' ')[0]}
      />
      <span>
        {Math.floor(weatherForecast.min)}&deg;/
        {Math.ceil(weatherForecast.max)}
        &deg;
      </span>
    </ListItem>
  );
}
export default ForecastListItem;
