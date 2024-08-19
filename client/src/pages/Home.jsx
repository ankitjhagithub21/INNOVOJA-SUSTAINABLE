import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Tech from '../components/Tech'
import Services from '../components/Services'
import Partners from '../components/Partners'
import WhyInnovoja from '../components/WhyInnovoja'

const Home = () => {
  

  useEffect(()=>{
   
    document.title = "Innovoja sustainable"
  },[])
  
  
  return (
    <>
      <Hero/>
      <Tech/>
      <Services/>
      <WhyInnovoja/>
      <Partners/>

    </>
  )
}

export default Home
