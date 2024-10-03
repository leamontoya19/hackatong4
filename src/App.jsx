import React from 'react';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
