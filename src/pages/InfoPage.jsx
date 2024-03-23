import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Info from '../components/Info'

const InfoPage = () => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedDistrict, setSelectedDistrict] = useState(1);

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value, 10);
    setSelectedYear(year);
  };

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
  };
 
  return (
    <>
      <Navbar />
      <Header
        selectedYear={selectedYear}
        selectedDistrict={selectedDistrict}
        onYearChange={handleYearChange}
        onDistrictChange={handleDistrictChange}        
      />
      <Info
        selectedYear={selectedYear}
        selectedDistrict={selectedDistrict}        
      />      
    </>
  )
}

export default InfoPage