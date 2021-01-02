import React, { useState } from 'react';
import CitiesProvider from '../Services/CitiesProvider';
import WeatherProvider from '../Services/WeatherProvider';

function Main() {
  const [currentCity, setCurrentCity] = useState();

  return (
    <>
      <CitiesProvider setCity={setCurrentCity} />
      {currentCity && <WeatherProvider city={currentCity} />}
    </>
  );
}

export default Main;
