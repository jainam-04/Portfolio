import React from 'react'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/skills' element={<Skills />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
