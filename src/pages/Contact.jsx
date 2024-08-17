import {useEffect} from 'react'
import ContactInfo from '../components/ContactInfo'

const Contact = () => {
    useEffect(()=>{
        document.title = "Contact - Innovoja Sustainable"
      },[])
  return (
    <>
      <ContactInfo/>
    </>
  )
}

export default Contact
