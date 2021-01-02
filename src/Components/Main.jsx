import React, { useState } from 'react';
import CitiesProvider from '../Services/CitiesProvider';
import WeatherProvider from '../Services/WeatherProvider';

function Main() {
  const [currentCity, setCurrentCity] = useState();

  return (
    <div className="d-flex">
      <CitiesProvider setCity={setCurrentCity} />
      {currentCity && <WeatherProvider city={currentCity} />}
    </div>
  );
}

export default Main;
