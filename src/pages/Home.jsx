import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Tech from '../components/Tech'
import Services from '../components/Services'

const Home = () => {
  const data = {
    heading:"How Do We Do That?",
    para:"By creating the most durable and innovative ion exchange membranes and polymers:"
  }
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  
  return (
    <>
      <Hero/>
      <Tech/>
      <Services data={data}/>

    </>
  )
}

export default Home
