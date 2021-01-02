import React, { useState, useEffect } from 'react';

function CitiesProvider() {
  const [cities, setCities] = useState([]);

  const fetchCities = async () => {
    const response = await fetch(
      'https://parseapi.back4app.com/classes/City?limit=10&order=-population&keys=name,population,cityId',
      {
        headers: {
          'X-Parse-Application-Id': 'kAj9f40xmkbQB3B2QvxTgvsmq8QPXM7Mcs4HUunB',
          'X-Parse-Master-Key': 'ORvMOXWnnQKq4mu1AmMThYC7QH1WkqVbAsG5mDTT',
        },
      },
    );
    const data = await response.json();
    setCities(data.results);
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <div>
      {cities.length && cities.map((c) => (
        <div key={c.cityId}>
          {c.name}
        </div>
      ))}
    </div>
  );
}

export default CitiesProvider;
