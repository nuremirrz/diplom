import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import DistAndYearChooser from '../components/DistAndYearChooser';
import Tli from '../components/Tli';
import Tsi from '../components/Tsi';

const TliTsiPage = () => {
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
      <h1>TLI/TSI Page</h1>   
      
      <DistAndYearChooser      
        selectedDistrict={selectedDistrict}
        onDistrictChange={handleDistrictChange}
      />   
      <div style={{display: 'flex', justifyContent: 'center', margin: '30px'}}>
        <Tli 
          selectedYear={selectedYear}   
          selectedDistrict={selectedDistrict} 
        />
        <Tsi
        selectedYear={selectedYear}   
        selectedDistrict={selectedDistrict}
        />
      </div>
    </>
  )
}

export default TliTsiPage