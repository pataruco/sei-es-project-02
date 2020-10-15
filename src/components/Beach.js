import React from 'react';

const Beach = ({ data }) => {
  const disabilityAccess = data.properties.Acceso_dis === 'Sí';
  const blueFlag = data.properties.Bandera_az === 'Sí';

  console.log({ disabilityAccess, blueFlag });

  return (
    <article key={data.properties.OBJECTID}>
      <h3>{data.properties.Nombre}</h3>
      <dl>
        <dt>Municipio</dt>
        <dd>{data.properties.Término_Mu}</dd>
        <dt>Acceso de discapacidad</dt>
        <dd>{data.properties.Acceso_dis}</dd>
        <dd>{data.properties.Tipo_de_ar}</dd>
        <dt>Bandera azul</dt>
        <dd>{data.properties.Bandera_az}</dd>
        <dt>Forma de accesso</dt>
        <dd>{data.properties.Forma_de_a}</dd>
        <dd>{data.properties.Observacio}</dd>
      </dl>
    </article>
  );
};

export default Beach;
