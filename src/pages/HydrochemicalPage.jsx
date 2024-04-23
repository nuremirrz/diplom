import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import NestedDropdown from '../components/NestedDropdown';
import ChemicCart from '../components/ChemicCart';

const HydrochemicalPage = () => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
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
      />
      <ChemicCart
        selectedYear={selectedYear}
        selectedOption={selectedOption}
        selectedSubOption={selectedSubOption}
        isButtonClicked={isSearchClicked} 
      />
    </>
  );
};

export default HydrochemicalPage;