import React, { useState, useEffect } from 'react';

import { Button, Modal } from 'react-bootstrap';
import { BrightnessHighFill, Moon } from 'react-bootstrap-icons';

function Weather({ city, weather }) {
  console.log(city);
  console.log(weather);
  return (

    <div id="details">
      <div>
        <p className="font-weight-bold text-uppercase text-center font-m mt-3">{city}</p>
        <p className="text-center font-s mb-3">{weather.name}</p>

        <h1 className="text-center font-xl mb-0 pb-0">{`${weather.temp} °C`}</h1>
        <p className="text-center font-s mb-5">{weather.sky}</p>

        <div className="d-flex justify-content-around mb-3">
          <div className="d-flex align-items-center">
            <BrightnessHighFill />
            <p className="pl-1 font-m">{weather.sunrise}</p>
          </div>
          <div className="d-flex align-items-center">
            <Moon />
            <p className="pl-1 font-m">{weather.sunset}</p>
          </div>
        </div>

      </div>

    </div>

  );
}

export default Weather;
