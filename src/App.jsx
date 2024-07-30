import React from 'react'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<About />}></Route>
          <Route exact path='/skills' element={<Skills />}></Route>
          <Route exact path='/projects' element={<Projects />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
