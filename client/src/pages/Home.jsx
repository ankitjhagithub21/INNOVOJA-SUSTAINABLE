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
  
  const data = {
    heading:"How Do We Do That?",
    para:"By creating the most durable and innovative ion exchange membranes and polymers:"
  }
  return (
    <>
      <Hero/>
      <Tech/>
      <Services data={data}/>
      <WhyInnovoja/>
      <Partners/>

    </>
  )
}

export default Home
