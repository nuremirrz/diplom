import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import MainMap from '../components/MainMap'
import NestedDropdown from '../components/NestedDropdown'
import ChemicCart from '../components/ChemicCart'
import { Container } from '@mui/material';

const MainPage = () => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [pdkUp, setPdkUp] = useState(null);
  const [pdkDown, setPdkDown] = useState(null);
  const [tableField, setTableField] = useState(null);
  const [relatedField, setRelatedField] = useState(null);
  const [pdkUpForSubOption, setPdkUpForSubOption] = useState(null);
  const [pdkDownForSubOption, setPdkDownForSubOption] = useState(null);

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

  const handleSubOptionChange = (subOptionName, pdk_up, pdk_down) => {
    setSelectedSubOption(subOptionName);
    setPdkUpForSubOption(pdk_up);
    setPdkDownForSubOption(pdk_down);
  };
  return (
    <>
      <Navbar
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
      />
      <Container style={{ display: 'flex', justifyContent: 'space-between',flexWrap: 'wrap', marginLeft: '0px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between',flexWrap: 'wrap' }}>
          <MainMap />
          <NestedDropdown
            onYearChange={handleYearChange}
            onOptionChange={handleOptionChange}
            onSubOptionChange={handleSubOptionChange}
            pdkUp={pdkUp}
            pdkDown={pdkDown}
          />
        </div>
        <ChemicCart
          selectedYear={selectedYear}
          selectedOption={selectedOption}
          selectedSubOption={selectedSubOption}
          tableField={tableField}

          pdkUp={pdkUp}
          pdkDown={pdkDown}
          relatedField={relatedField}
          pdkUpForSubOption={pdkUpForSubOption}
          pdkDownForSubOption={pdkDownForSubOption}
        />
      </Container>
    </>
  )
}

export default MainPage