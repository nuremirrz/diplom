import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Tsi from '../components/Tsi';
import DistAndYearChooser from '../components/DistAndYearChooser';

const TsiPage = () => {
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
      <h1>TSI Page</h1>  
      <DistAndYearChooser      
        selectedDistrict={selectedDistrict}
        onDistrictChange={handleDistrictChange}
      />
      <Tsi
        selectedYear={selectedYear}   
        selectedDistrict={selectedDistrict}
      />  
    </>
  );
};

export default TsiPage;