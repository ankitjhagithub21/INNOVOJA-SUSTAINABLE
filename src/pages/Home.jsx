import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Tech from '../components/Tech'
import Services from '../components/Services'
import Partners from '../components/Partners'

const Home = () => {
  const data = {
    heading:"How Do We Do That?",
    para:"By creating the most durable and innovative ion exchange membranes and polymers:"
  }

  useEffect(()=>{
   
    document.title = "Innovoja sustainable"
  },[])
  
  
  return (
    <>
      <Hero/>
      <Tech/>
      <Services data={data}/>
      <Partners/>

    </>
  )
}

export default Home
