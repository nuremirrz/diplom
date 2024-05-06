import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Tli from '../components/Tli';
import DistAndYearChooser from '../components/DistAndYearChooser';

const TliPage = () => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedDistrict, setSelectedDistrict] = useState(1);

  const handleYearChange = (year, event) => {
    setSelectedYear(year);
  };

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
  };

  return (
    <>
      <Navbar
      selectedYear={selectedYear}
      onYearChange={handleYearChange}
      
      />
      <h1>TLI Page</h1>   
      
      <DistAndYearChooser      
        selectedDistrict={selectedDistrict}
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