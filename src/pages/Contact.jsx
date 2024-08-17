import {useEffect} from 'react'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'

const Contact = () => {
    useEffect(()=>{
        document.title = "Contact - Innovoja Sustainable"
        window.scrollTo(0,0)
      },[])
  return (
    <>
      <ContactInfo/>
      <ContactForm/>
      <Map/>
    </>
  )
}

export default Contact
