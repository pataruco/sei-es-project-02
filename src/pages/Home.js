import React, { useEffect, useState } from 'react';
import { getAllBeaches } from '../lib/api';
import Results from './Results';

const Home = () => {
  const [beaches, setBeaches] = useState([]);
  const [loading, setloading] = useState(true);
  const [cities, setCities] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [beachesToRender, setBeachesToRender] = useState([]);

  const setMunicipalities = (arrayBeaches) => {
    const municipalitiesData = arrayBeaches
      .map((beach) => {
        return beach.properties.Término_Mu.toLowerCase();
      })
      .filter((municipality, position, municipalities) => {
        return municipalities.indexOf(municipality) === position;
      });

    setCities(municipalitiesData);
  };

  const fetchAllBeaches = async () => {
    const beachesData = await getAllBeaches();
    setMunicipalities(beachesData);
    setBeaches(beachesData);
    setloading(false);
    // handleSubmit()
  };

  useEffect(() => {
    fetchAllBeaches();
  }, []);

  const handleChange = (event) => {
    const searchItem = event.currentTarget.value.toLowerCase();
    setSearchString(searchItem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const municipalitiesToShow = cities.filter((city) => {
      return city.includes(searchString);
    });

    console.log({ municipalitiesToShow });

    const beachesToShow = beaches.filter((beach) => {
      return municipalitiesToShow.includes(
        beach.properties.Término_Mu.toLowerCase(),
      );
    });

    setBeachesToRender(beachesToShow);
  };

  return (
    <main>
      <section className="container">
        <h2>Home</h2>
        {loading && <h3>Loading</h3>}

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
        <Results beaches={beachesToRender} />
      </section>
    </main>
  );
};

export default Home;
