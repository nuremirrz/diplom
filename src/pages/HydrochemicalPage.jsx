import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import NestedDropdown from '../components/NestedDropdown';
import ChemicCart from '../components/ChemicCart';

const HydrochemicalPage = () => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [additionalParams, setAdditionalParams] = useState(null);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleOptionChange = (optionId, params, year) => {
    setSelectedOption(optionId);
    setAdditionalParams({...params, year});
  };

  const handleSubOptionChange = (subOption) => {
    setSelectedSubOption(subOption);
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
        selectedYear={selectedYear}
        isSearchClicked={isSearchClicked}
        onButtonClick={handleButtonClick}
      />
      <ChemicCart
        selectedYear={selectedYear}
        selectedOption={selectedOption}
        selectedSubOption={selectedSubOption}
        additionalParams={additionalParams}
        isButtonClicked={isSearchClicked} // Можно использовать isSearchClicked вместо isButtonClicked
      />
    </>
  );
};

export default HydrochemicalPage;