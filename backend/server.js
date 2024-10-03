const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

// Permitir CORS
app.use(cors());

// Ruta para reenviar solicitudes
app.get('/api/:category', async (req, res) => {
  const { category } = req.params;
  const apiUrls = {
    social: 'https://datos.madrid.es/egob/catalogo/212774-0-atencion-social.json',
    educacion: 'https://datos.madrid.es/egob/catalogo/212790-0-centros-educacion.json',
    medica: 'https://datos.madrid.es/egob/catalogo/212769-0-atencion-medica.json',
  };

  // Verifica si la categoría es válida
  if (!apiUrls[category]) {
    return res.status(400).send('Categoría no válida.');
  }

  try {
    const response = await axios.get(apiUrls[category]);
    res.json(response.data);
  } catch (error) {
    // Imprime información detallada del error
    console.error('Error al obtener datos de la API externa:', error.message);

    if (error.response) {
      // Error de la API externa (código de estado 4xx o 5xx)
      console.error('Datos del error de la API externa:', error.response.data);
      res.status(500).send('Error al obtener datos de la API externa.');
    } else if (error.request) {
      // No hubo respuesta de la API externa
      console.error('No hubo respuesta de la API externa:', error.request);
      res.status(500).send('No hubo respuesta de la API externa.');
    } else {
      // Error en la configuración de la solicitud
      console.error('Error en la configuración de la solicitud:', error.message);
      res.status(500).send('Error en la configuración de la solicitud.');
    }
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
