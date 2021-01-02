import React, { useState } from 'react';
import Nav from './Header';

import Router from '../Core/Router';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router />
    </div>
  );
}

export default App;
