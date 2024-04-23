import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Tli from '../components/Tli';
import DistAndYearChooser from '../components/DistAndYearChooser';

const TliPage = () => {
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
      <Navbar/>
      <h1>TLI Page</h1>   
      <DistAndYearChooser      
        selectedYear={selectedYear}
        selectedDistrict={selectedDistrict}
        onYearChange={handleYearChange}
        onDistrictChange={handleDistrictChange}
      />   
      <Tli 
        selectedYear={selectedYear}   
        selectedDistrict={selectedDistrict} 
      />
    </>
  )
}

export default TliPage