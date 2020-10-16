import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [searchString, setSearchString] = useState('');
  const history = useHistory();

  const handleChange = (event) => {
    const searchItem = event.currentTarget.value;
    setSearchString(searchItem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/results/${searchString.toLowerCase()}`);
  };

  return (
    <main className="homeMain">
      <section className="container">
        <h2>BUSCADOR DE PLAYAS</h2>

        <form method="get" action="/" onSubmit={handleSubmit}>
          <label htmlFor="search"></label>
          <input className="input"
            type="search"
            id="search"
            placeholder="Buscar ciudad"
            value={searchString}
            onChange={handleChange}
          />
          <button className="btn" type="submit">Buscar</button>
        </form>
      </section>
    </main>
  );
};

export default Home;
