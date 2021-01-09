import React from 'react';

function Home() {
  return (
    <main>
      <div id="home">
        <h1 className="text-center font-l">Bienvenue dans Weather-FR</h1>
        <br />
        <p className="text-white font-m">
          Weather-FR est une application qui propose un service de météo,
          et donc qui fournit une prévision météorologique nationale pour les villes les plus
          populaire de France.
        </p>
        <br />
        <p className="text-white font-m">
          Weather-FR utilise deux api : &nbsp;
          <a target="_blank" rel="noreferrer" href="https://www.back4app.com/database/back4app/list-of-largest-cities-in-france">Back4App</a>
          &nbsp;
          qui permet de lister des villes de France en fonction de certains critères, et &nbsp;
          <a target="_blank" rel="noreferrer" href="https://openweathermap.org/current">OpenWeather</a>
          &nbsp; qui permet de récupérer la météo d&apos;une ville au choix.
        </p>
      </div>
    </main>
  );
}

export default Home;
