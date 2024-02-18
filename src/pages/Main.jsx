import React from 'react'
import Navbar from '../components/Navbar'
import MainMap from '../components/MainMap'
import ChartExample from '../components/ChartExample'
// import AreaCoverageChart from '../components/AreaCoverageChart';
// import FormulForm from '../components/FormulForm'


const Main = () => {
  return (
    <>
      <Navbar/>
      <MainMap/>
      {/* <FormulForm/> */}
      <ChartExample />     
    </>
  )
}

export default Main