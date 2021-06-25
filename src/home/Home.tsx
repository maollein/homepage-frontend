import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className='container-fluid mt-4'>
      <div className="row">
        <div className="col-12 col-lg-10">
          <h2>Matti Leinonen</h2>
          <img className="w-25 float-left mr-3 home-picture" alt="Profile picture of Matti" src="/profile_picture.jpg"/>  
          <p>
            Tervetuloa kotisivuilleni. Olen vuonna 1992 syntynyt filosofian maisteri.
            Valmistuin elokuussa 2020 Jyväskylän yliopistosta pääaineenani tietotekniikka.
            Näiden sivujen tarkoituksena on olla mukava projekti, jonka kautta voin
            kasvattaa omaa sovelluskehitysosaamistani sekä ilmaista itseäni omassa
            blogissani. Sivusto on siis jatkuvan kehitystyön alla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;