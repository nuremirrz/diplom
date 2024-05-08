import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import MainMap from '../components/MainMap'
import NestedDropdown from '../components/NestedDropdown'
import { Container } from '@mui/material';
import ElementsChart from '../components/ElementsChart';

const MainPage = () => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [selectedControlPointId, setSelectedControlPointId] = useState(null);
  const [tableField, setTableField] = useState(null);
  const [relatedField, setRelatedField] = useState(null);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleMarkerClick = (id) => {
    // Обработка клика на маркере, например, вывод id в консоль
    // Обновление состояния с выбранным id контрольной точки
    setSelectedControlPointId(id);
    console.log("Selected Control Point ID:", id);
  };

  const handleOptionChange = (optionId, tableField, relatedField) => {
    setSelectedOption(optionId);
    setTableField(tableField);
    setRelatedField(relatedField);    
  };

  const handleSubOptionChange = (subOptionName) => {
    setSelectedSubOption(subOptionName);
  };

  return (
    <>
      <Navbar
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
      />
      <Container style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginLeft: '0px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <MainMap onMarkerClick={handleMarkerClick} />
          <NestedDropdown
            onYearChange={handleYearChange}
            onOptionChange={handleOptionChange}
            onSubOptionChange={handleSubOptionChange}
          />
        </div>
        {/* <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}> */}
        <h2>Значение {selectedSubOption ? <span dangerouslySetInnerHTML={{__html: selectedSubOption.name+ ` за все года`}} /> : selectedOption ? `${selectedOption} за все года` : 'параметров за все года'}</h2>
        <ElementsChart
          selectedControlPointId={selectedControlPointId}
          selectedOption={selectedOption}
          selectedSubOption={selectedSubOption}
          tableField={tableField}
          relatedField={relatedField}
        />
        {/* </div> */}
      </Container>
    </>
  )
}

export default MainPage