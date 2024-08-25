import React from 'react'
import "./App.css"
import Home from './components/Home';
import Form from './components/Form';
import { useSelector } from "react-redux"
import useFetchAuthUser from './hooks/useFetchAuthUser';
import Loader from './components/Loader';
const App = () => {
  const loading = useFetchAuthUser()
  const { user } = useSelector(state => state.auth);
  if (loading) {
    return <Loader />
  }
  return (
    <>
      {
        user ? <Home /> : <Form />
      }
    </>
  )
}

export default App
