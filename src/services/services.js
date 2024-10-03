import axios from 'axios';

// Función para hacer el GET según la categoría seleccionada
const fetchData = async (category) => {
  // Aquí haces la solicitud al backend que corre en localhost:5000
  const response = await axios.get(`http://localhost:5000/api/${category}`);
  
  // Retorna la propiedad '@graph' de los datos
  return response.data['@graph'];
};

export { fetchData };