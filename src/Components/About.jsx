import React from 'react';

function About() {
  return (
    <main>
      <div id="about">
        <p className="text-white font-m">
          Weather-FR est une application réalisée en React, qui propose un service de météo.
          Cette application utilise deux APIs : &nbsp;
          <a href="https://www.back4app.com/database/back4app/list-of-largest-cities-in-france">Back4App</a>
          &nbsp; et &nbsp;
          <a href="https://openweathermap.org/current">OpenWeather</a>
          .
        </p>
        <br />
        <p className="text-white font-m">
          Ce projet a été réalisé dans le but de l&apos;apprentissage de &nbsp;
          <a href="https://reactjs.org/">React</a>
          &nbsp; durant le cours du même nom au sein de l&apos;ESGI.
        </p>
        <br />
        <p className="text-white font-m">
          Outils et environnement de développement :
        </p>
        <ul>
          <li className="text-white font-m">Visual Studio Code</li>
          <li className="text-white font-m">React Bootstrap</li>
          <li className="text-white font-m">Back4App API</li>
          <li className="text-white font-m">OpenWeather API</li>
        </ul>
      </div>
    </main>
  );
}

export default About;
