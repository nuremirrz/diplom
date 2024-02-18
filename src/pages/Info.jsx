import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Info = ({params}) => {
  const {year, district} = params;

  return (
    <>
      <Navbar />
      <Header/>
      {/* <div> */}
        {/* <h2>Информация для {year} года в районе {district}</h2> */}
        {/* Добавьте здесь ваш контент */}
      {/* </div> */}
    </>
  )
}

export default Info