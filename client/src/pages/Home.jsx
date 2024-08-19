import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Tech from '../components/Tech'
import Services from '../components/Services'
import Partners from '../components/Partners'

const Home = () => {
  

  useEffect(()=>{
   
    document.title = "Innovoja sustainable"
  },[])
  
  
  return (
    <>
      <Hero/>
      <Tech/>
      <Services/>
      <Partners/>

    </>
  )
}

export default Home
