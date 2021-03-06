import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar id="nav" bg="dark" variant="dark">
      <Navbar.Brand href="home">
        <img alt="" src="/icon.svg" width="30" height="30" className="d-inline-block align-top" />
        &nbsp;
        WeatherFR
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="home">Accueil</Nav.Link>
        <Nav.Link href="weather">Météo</Nav.Link>
        <Nav.Link href="about">À propos</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
