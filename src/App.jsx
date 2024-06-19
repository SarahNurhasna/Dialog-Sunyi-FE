/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Beranda from './pages/Beranda'
import Kelas from './pages/Kelas'
import Artikel from './pages/Artikel'
import FAQ from './pages/FAQ'
import TentangKami from './pages/TentangKami'

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Beranda />}/>
        <Route path='/kelas' element={<Kelas />}/>
        <Route path='/artikel' element={<Artikel />}/>
        <Route path='/faq' element={<FAQ />}/>
        <Route path='/tentang-kami' element={<TentangKami />}/>
      </Routes>
    </Router>
  )
}

export default App
// <div>
    //   <React.Fragment>
    //     <FAQ/>
    //   </React.Fragment>
    // </div>