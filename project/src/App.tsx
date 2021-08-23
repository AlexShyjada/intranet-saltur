import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home'
import SobreNos from './components/Pages/SobreNos'
import LinksUteis from './components/Pages/LinksUteis'
import Noticias from './components/Pages/Noticias'
import Ramais from './components/Pages/Ramais'
import Downloads from './components/Pages/Downloads'
import Missao from './components/Pages/MissaoVisãoValores'
import './Global.css'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Hero/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre-nos" element={<SobreNos />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="links-uteis" element={<LinksUteis />} />
        <Route path="ramais" element={<Ramais />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="missao" element={<Missao />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;