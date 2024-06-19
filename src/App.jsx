/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kelas from './pages/Kelas'
import FAQ from './pages/FAQ'
import TentangKami from './pages/TentangKami'
import Artikel from './pages/Artikel'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DetailArticle from './pages/DetailArtikel';

const App = () => {
  return (
    <Router>
      <Navbar />

      <div style={{ paddingTop: '90px'}}>
        <Routes>
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/' element={<Artikel />} />
          <Route path='/detail-artikel/:id' element={<DetailArticle />} />
          <Route path='/tentang-kami' element={<TentangKami />} />
          <Route path='/kelas' element={<Kelas />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App