import React, {useState}  from 'react'
import NavBar from '../components/Navbar'
import NestedDropdown from '../components/NestedDropdown'
import ChemicCart from '../components/ChemicCart'

const HydrochemicalPage = () => {
  const [chemicalData, setChemicalData] = useState(null);

  const handleDataUpdate = (data) => {
    setChemicalData(data);
  };

  const [selectedYear, setSelectedYear] = useState(2022);
  
  const handleYearChange = (event) => {
    const year = parseInt(event.target.value, 10);
    setSelectedYear(year);
  };

  return (
    <>
        <NavBar/>
        <NestedDropdown onDataUpdate={handleDataUpdate} />
        <ChemicCart chemicalData={chemicalData} selectedYear={selectedYear} />
    </>
  )
}

export default HydrochemicalPage