import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className='container-fluid mt-4'>
      <div className="row">
        <div className="col-12 col-lg-10 home-content">
          <h2>Matti Leinonen</h2>
          <img className="w-25 pe-3 float-start home-picture" alt="Profile picture of Matti" src="/profile_picture.jpg" />
          <ul className="">
            <li><b>Syntynyt:</b> 1992</li>
            <li><b>Kotikaupunki:</b> Jyväskylä</li>
            <li><b>Koulutus:</b> FM, tietotekniikka</li>
            <li><b>Työ:</b> Ohjelmistokehittäjä</li>
            <li><b>Osaaminen:</b> Web-sovelluskehitys</li>
            <li><b>Harrastukset:</b> Kuntosali, lenkkeily, moninaisten kiinnostuksenkohteiden opiskelu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;