import React from 'react';

function Cities({ cities }) {
  return (
    <div>
      {cities && cities.length && cities.map((c) => (
        <div key={c.cityId}>
          {c.name}
        </div>
      ))}
    </div>
  );
}

export default Cities;
