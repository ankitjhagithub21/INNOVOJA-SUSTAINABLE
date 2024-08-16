import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./App.css"
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/*' Component={NotFound}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
