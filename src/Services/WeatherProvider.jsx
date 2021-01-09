import React, { useState, useEffect } from 'react';
import Weather from '../Components/Weather';

const APP_ID = 'be4f151ec19dacd96c7ae833d5fd2838';

function WeatherProvider({ city }) {
  const [weather, setWeather] = useState();

  const formatTimestamp = (stamp) => {
    const date = new Date(stamp * 1000);
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`;

    return `${hours}:${minutes.substr(-2)}`;
  };

  const generateWeatherInfo = (data) => {
    const { name } = data;
    const temp = Math.round(data.main.temp);
    const sunrise = formatTimestamp(data.sys.sunrise);
    const sunset = formatTimestamp(data.sys.sunset);
    const sky = data.weather[0].main;

    const weatherInfo = {
      name, temp, sunrise, sunset, sky,
    };

    setWeather(weatherInfo);
  };
  const fetchWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}&units=metric`);
    const data = await response.json();
    generateWeatherInfo(data);
  };

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
    return (() => {
      setWeather();
    });
  }, [city]);

  return (
    <>
      { weather && <Weather city={city} weather={weather} />}
    </>
  );
}

export default WeatherProvider;
