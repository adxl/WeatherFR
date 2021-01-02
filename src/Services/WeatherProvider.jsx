import React, { useState, useEffect } from 'react';

const APP_ID = 'be4f151ec19dacd96c7ae833d5fd2838';

function WeatherProvider({ city }) {
  const [weather, setWeather] = useState({});

  const generateWeatherInfo = (data) => {
    const { name } = data;
    const { temp } = data.main;
    const { sunrise } = data.sys;
    const { sunset } = data.sys;
    const sky = data.weather[0].main;

    const weatherInfo = {
      name, temp, sunrise, sunset, sky,
    };

    console.log(weatherInfo);
  };
  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`,
      {
        // headers: {
        //   'Access-Control-Allow-Origin': 'no-cors',
        // },
      },
    );
    const data = await response.json();
    generateWeatherInfo(data);
  };

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, []);

  return (
    <>
      ?
    </>
  );
}

export default WeatherProvider;
