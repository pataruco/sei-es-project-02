import React, { useEffect, useState } from 'react';
import { getAllBeaches } from '../lib/api';
import { useParams } from 'react-router-dom';

const Results = () => {
  const [loading, setloading] = useState(true);
  const [beachesToRender, setBeachesToRender] = useState([]);
  const { searchString } = useParams();

  const getBeachesToRender = (allBeaches, string) => {
    return allBeaches.filter((beach) => {
      return beach.properties.Término_Mu.toLowerCase().includes(string);
    });
  };

  const fetchAllBeaches = async () => {
    const beachesData = await getAllBeaches();
    const beachesToShow = getBeachesToRender(beachesData, searchString);
    setBeachesToRender(beachesToShow);
  };

  useEffect(() => {
    fetchAllBeaches();
  }, []);

  return (
    <main className="page">
      <h2>Results</h2>
      {loading && <h3>Loading</h3>}

      {beachesToRender.map((beach) => {
        return (
          <article key={beach.properties.OBJECTID}>
            <h3>{beach.properties.Nombre}</h3>
            <dl>
              <dt>Municipio</dt>
              <dd>{beach.properties.Término_Mu}</dd>
              <dd>{beach.properties.Acceso_dis}</dd>
              <dd>{beach.properties.Tipo_de_ar}</dd>
              <dd>{beach.properties.Bander_az}</dd>
              <dd>{beach.properties.Forma_de_a}</dd>
              <dd>{beach.properties.Observacio}</dd>
            </dl>
          </article>
        );
      })}
    </main>
  );
};

export default Results;
