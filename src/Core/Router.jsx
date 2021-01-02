import React, { useState, useEffect } from 'react';
import Home from '../Components/Home';
import Main from '../Components/Main';
import About from '../Components/About';

function Router() {
  const [path, setPath] = useState('/home');

  useEffect(() => {
    const { pathname } = window.location;
    setPath(pathname);
  }, []);

  return (
    <>
      { path === '/home' && <Home />}
      { path === '/weather' && <Main />}
      { path === '/about' && <About />}
    </>
  );
}

export default Router;
