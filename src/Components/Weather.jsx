import React from 'react';

function Weather({ city, weather }) {
  return (
    <div>
      {(city && weather)
        ? (
          <div className="d-flex">
            <p>{city}</p>
            <p>{`${weather.temp} °C`}</p>
          </div>
        )
        : <p>Loading..</p>}
    </div>
  );
}

export default Weather;
