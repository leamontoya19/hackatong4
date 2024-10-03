# EasySpain

## Descripción del Proyecto

**EasySpain** es una aplicación web diseñada para facilitar el acceso a información relevante sobre servicios de salud, educación y atención social en Madrid. La aplicación utiliza varias APIs públicas para obtener datos de centros y servicios dentro de la ciudad y los filtra según la ubicación actual del usuario y sus preferencias.

El proyecto está construido con una arquitectura **full stack** utilizando **React** en el frontend, que consume datos de diferentes APIs públicas y los muestra en una interfaz intuitiva y fácil de usar.

## Características Principales

- **Filtrado por Categoría**: El usuario puede seleccionar la categoría de servicios que le interesa (salud, educación, atención social) desde el menú de navegación.
- **Filtrado por Localización**: La aplicación utiliza la geolocalización del navegador para mostrar solo los servicios dentro de un radio de 10 kilómetros de la ubicación actual del usuario.
- **Visualización de Servicios**: Los servicios filtrados se muestran en tarjetas con información relevante como nombre, dirección, accesibilidad y servicios proporcionados.

## Tecnologías Utilizadas

- **Frontend**: React (con `react-router` para la navegación)
- **Backend**: No aplica en este caso, la aplicación consume APIs públicas directamente desde el frontend.
- **Librerías adicionales**:
  - `axios` para realizar peticiones HTTP.
  - `tailwindcss` para estilos.

## Instalación

Sigue los siguientes pasos para clonar e instalar el proyecto localmente:

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/leamontoya19/hackatong4
   ```
   
   ```bash
   cd hackatong4
   ```

   ```bash
   npm install
   ```
   
   ```bash
   cd hackatong4
   ```
2. Configuración del Backend
Navega al directorio del backend:

 ```bash
cd backend
Instala las dependencias del backend:
```
 ```bash
npm install
Inicia el servidor:
```
 ```bash
npm start
```
Esto iniciará el servidor Express en http://localhost:5000. El servidor se encargará de gestionar las solicitudes y reenviar los datos obtenidos desde las APIs públicas.

3. Configuración del Frontend
Navega al directorio del frontend:

```bash
cd ../frontend
```
Instala las dependencias del frontend:


```bash
npm install
Inicia la aplicación frontend:
```


```bash
npm run dev
```
Esto iniciará la aplicación en modo desarrollo en http://localhost:3000. Puedes acceder a la aplicación desde tu navegador.