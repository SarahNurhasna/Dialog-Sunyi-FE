/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Beranda from "./pages/Beranda";
import Kelas from "./pages/Kelas";
import Artikel from "./pages/Artikel";
import FAQ from "./pages/FAQ";
import TentangKami from "./pages/TentangKami";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DetailArticle from "./pages/DetailArtikel";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: "90px", minHeight: "100vh" }} className="bg-DS-beige dark:bg-DS-charcoal-950">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/detail-artikel/:id" element={<DetailArticle />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
