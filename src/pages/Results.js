import React from 'react';
// import beachesToRender from './Home.js';

const Results = ({ beaches }) => {
  return beaches.map((beach) => {
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
  });
};

export default Results;
