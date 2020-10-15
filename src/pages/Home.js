import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [searchString, setSearchString] = useState('');
  const history = useHistory();

  const handleChange = (event) => {
    const searchItem = event.currentTarget.value.toLowerCase();
    setSearchString(searchItem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/results/${searchString}`);
  };

  return (
    <main>
      <section className="container">
        <h2>Home</h2>

        <form method="get" action="/" onSubmit={handleSubmit}>
          <label htmlFor="search">Search</label>
          <input
            type="search"
            id="search"
            placeholder="Municipality to search"
            value={searchString}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </section>
    </main>
  );
};

export default Home;
