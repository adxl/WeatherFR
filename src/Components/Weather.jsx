import React, { useState, useEffect } from 'react';

import { Button, Modal } from 'react-bootstrap';

function Weather({ city, weather }) {
  console.log(city);
  console.log(weather);
  return (
    <div className="position-relative">

      <div id="details-bg" className="" />
      <div id="details" className="position-absolute">
        <p>{`${city} : ${weather.temp} °C`}</p>
        <p>{weather.name}</p>
        <p>{weather.sky}</p>
        <p>{`Lever: ${weather.sunrise}`}</p>
        <p>{`Coucher: ${weather.sunset}`}</p>
      </div>

    </div>
  );
}

export default Weather;
