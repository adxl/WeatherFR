import React from 'react';

import { Button } from 'react-bootstrap';

function Cities({ cities, setCity }) {
  return (
    <div className="d-flex justify-content-center">
      <div id="map" className="position-relative">
        <img src="../../map.jpg" alt="map" />
        { cities.map((c) => (
          <Button variant="info" key={c.cityId} id={c.name.toLowerCase()} className="city mx-1" onClick={() => setCity(c.name)}>
            {c.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Cities;
