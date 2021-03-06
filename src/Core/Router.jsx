import React, { useState, useEffect } from 'react';
import Home from '../Components/Home';
import Main from '../Components/Main';
import About from '../Components/About';

function Router() {
  const [path, setPath] = useState();
  const PAGES = ['/home', '/weather', '/about'];

  useEffect(() => {
    const { pathname } = window.location;
    setPath(pathname.length > 3 ? pathname : '/home');
  }, []);

  return (
    <>
      { path === '/home' && <Home />}
      { path === '/weather' && <Main />}
      { path === '/about' && <About />}
      { !PAGES.includes(path) && <Home />}
    </>
  );
}

export default Router;
