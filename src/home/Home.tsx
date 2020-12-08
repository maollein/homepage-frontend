import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className='container-fluid mt-4'>
      <div className="row">
        <div className="col-12 col-lg-10">
          <h2>Matti Leinonen</h2>
          <img className="w-25 float-left mr-3 home-picture" src="/profile_picture.jpg"/>  
          <p>
            Tervetuloa kotisivuilleni. Olen vuonna 1992 syntynyt filosofian maisteri.
            Valmistuin elokuussa 2020 Jyväskylän yliopistosta pääaineenani tietotekniikka.
            Näiden sivujen tarkoituksena on olla mukava projekti, jonka kautta voin
            kasvattaa omaa sovelluskehitysosaamistani sekä ilmaista itseäni omassa
            blogissani. Sivusto on siis jatkuvan kehitystyön alla, ja tällä hetkellä
            aivan alkutekijöissään.
          </p>
          <h3>Kotisivujen toteutus</h3>
          <p>
            Selainpuolella on käytössä muun muassa <b>React</b>, <b>React router</b>, <b>Redux</b> ja <b>Bootstrap</b>.
            Kehitystyössä käytetään <b>Webpackia</b> ja <b>Babelia</b> ilman Create React App -magioita.
            Palvelinpuolella on käytössä <b>Node</b> ja <b>Express</b> sekä tietokantana <b>PostgreSQL</b>. Niin 
            selain- kuin palvelinpuolellakin käytetään <b>TypeScriptiä</b>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;