import React from 'react'
import Error404 from '../components/Error404'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const error = () => {
  return (
    <>
        <Navbar/>
        <Error404/>
        <Footer/>
    </>
  )
}

export default error