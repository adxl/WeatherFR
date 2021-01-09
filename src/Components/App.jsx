import React, { useState } from 'react';
import Nav from './Header';
import Footer from './Footer';

import Router from '../Core/Router';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
