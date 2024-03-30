import React, {useState}  from 'react'
import NavBar from '../components/Navbar'
import NestedDropdown from '../components/NestedDropdown'
import ChemicCart from '../components/ChemicCart'

const HydrochemicalPage = () => {
  const [chemicalData, setChemicalData] = useState(null);

  const handleDataUpdate = (data) => {
    setChemicalData(data);
  };

  return (
    <>
        <NavBar/>
        <NestedDropdown onDataUpdate={handleDataUpdate} />
        <ChemicCart chemicalData={chemicalData} />
    </>
  )
}

export default HydrochemicalPage