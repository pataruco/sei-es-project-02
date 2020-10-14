const URL =
  'https://opendata.arcgis.com/datasets/84ddbc8cf4104a579d579f6441fcaa8a_0.geojson';

export const getAllBeaches = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data.features;
};
