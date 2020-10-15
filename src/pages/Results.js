import React, { useEffect, useState } from 'react';
import { getAllBeaches } from '../lib/api';
import { useParams } from 'react-router-dom';
import Beach from '../components/Beach';

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
    setloading(false);
    setBeachesToRender(beachesToShow);
  };

  useEffect(() => {
    fetchAllBeaches();
  }, []);

  return (
    <main className="main">
     
      <h2>Se han encontrado {beachesToRender.length} playas</h2>
      {loading && <h3>Loading</h3>}

      {beachesToRender.map((beach) => (
         <div className="results">
        <Beach key={beach.properties.OBJECTID} data={beach} />
            </div>
      ))}
  
    </main>
  );
};

export default Results;
