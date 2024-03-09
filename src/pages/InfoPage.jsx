import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Info from './Info'

const InfoPage = () => {

  return (
    <>
      <Navbar />
      <Header/>
      {/* <InfoPage/> */}
      <Routes>
        <Route path="/" element={<Info />} />
      </Routes>
    </>
  )
}

export default InfoPage