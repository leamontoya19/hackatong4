import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import NewsAlert from './components/newsAlert/NewsAlert';
//import Home from './pages/Home';  // Supongamos que tienes una página Home
//import About from './pages/About';  // Supongamos que tienes una página About

function App() {
  return (
    <Router>
      <Header />
      <NewsAlert/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
