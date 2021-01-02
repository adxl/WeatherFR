import React, { useState, useEffect } from 'react';

import { Button, Modal } from 'react-bootstrap';

function Weather({ city, weather }) {
  console.log(city);
  console.log(weather);
  return (
    <div>
      <p>{`${city} : ${weather.temp} °C`}</p>
      <p>{weather.sky}</p>
      <p>{`Lever: ${weather.sunrise}`}</p>
      <p>{`Coucher: ${weather.sunset}`}</p>
    </div>
  );
}

export default Weather;
