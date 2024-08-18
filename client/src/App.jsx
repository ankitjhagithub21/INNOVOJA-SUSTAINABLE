import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./App.css"
import NotFound from './pages/NotFound'
import Technology from './pages/Technology'
import Applications from './pages/Applications'
import Resources from './pages/Resources'
import Media from './pages/Media'
import HowToBuy from './pages/HowToBuy'
import MoreInfo from './pages/MoreInfo'
import GoToTop from './components/GoToTop'
import Contact from './pages/Contact'
import Team from './pages/Team'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/about/team' Component={Team}/>
        <Route path='/technology' Component={Technology}/>
        <Route path='/applications' Component={Applications}/>
        <Route path='/resources' Component={Resources}/>
        <Route path='/media' Component={Media}/>
        <Route path='/how-to-buy' Component={HowToBuy}/>
        <Route path='/get-more-info' Component={MoreInfo}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/*' Component={NotFound}/>
      </Routes>
      <GoToTop/>
      <Footer/>
    </Router>
  )
}

export default App
