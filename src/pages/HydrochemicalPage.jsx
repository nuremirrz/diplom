import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import NestedDropdown from '../components/NestedDropdown';
import ChemicCart from '../components/ChemicCart';

const HydrochemicalPage = () => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [pdkUp, setPdkUp] = useState(null);
  const [pdkDown, setPdkDown] = useState(null);  
  const [tableField, setTableField] = useState(null);  
  const [relatedField, setRelatedField] = useState(null);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleOptionChange = (optionId, tableField, relatedField, pdk_up, pdk_down) => {
    setSelectedOption(optionId);  
    setTableField(tableField); 
    setRelatedField(relatedField); 
    setPdkUp(pdk_up);
    setPdkDown(pdk_down);
  };

  const handleSubOptionChange = (subOptionName) => {
    setSelectedSubOption(subOptionName);
  };

  const handleButtonClick = () => {
    setIsSearchClicked(true);
  };

  return (
    <>
      <NavBar />
      <NestedDropdown
        onYearChange={handleYearChange}
        onOptionChange={handleOptionChange}
        onSubOptionChange={handleSubOptionChange}
        isSearchClicked={isSearchClicked}
        onButtonClick={handleButtonClick}      
        pdkUp={pdkUp}
        pdkDown={pdkDown}         
      />
      <ChemicCart
        selectedYear={selectedYear}
        selectedOption={selectedOption}
        selectedSubOption={selectedSubOption}
        tableField={tableField}
        isButtonClicked={isSearchClicked} 
        pdkUp={pdkUp}
        pdkDown={pdkDown}  
        relatedField={relatedField}            
      />
    </>
  );
};

export default HydrochemicalPage;