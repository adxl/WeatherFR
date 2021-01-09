import React from 'react';
import Nav from './Header';
import Footer from './Footer';

import Router from '../Core/Router';
import Background from './Background';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Background />
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
