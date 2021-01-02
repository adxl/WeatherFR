import React, { useState } from 'react';
import CitiesProvider from '../Services/CitiesProvider';
import WeatherProvider from '../Services/WeatherProvider';

function App() {
  const [currentCity, setCurrentCity] = useState('paris');
  return (
    <div className="App">
      <CitiesProvider />
      <WeatherProvider city={currentCity} />
    </div>
  );
}

export default App;
