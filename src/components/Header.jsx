import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl } from '@mui/base/FormControl';
import { InputLabel,  MenuItem, Button, Select } from '@mui/material';


const Header = () => {

  const navigate = useNavigate();
  const districts = ['Иссык-Куль', 'Тюп', 'Ак-Суу', 'Тон', 'Джети-Огуз'];
  const [selectedYear, setSelectedYear] = useState(1990);
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);

  const years = Array.from({ length: 35 }, (_, index) => 1990 + index);


  const handleYearChange = (event) => {
    const year = parseInt(event.target.value, 10);
    setSelectedYear(year);
  };

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
  };

  const navigateToPage = () => {
    const url = `/info/${selectedYear}/${selectedDistrict}`;
    navigate(url);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', gap: '30px', alignItems: 'center', margin: '30px'}}>
      <FormControl >
        <InputLabel>Выберите год</InputLabel>
        <Select value={selectedYear} onChange={handleYearChange}>
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl >
        <InputLabel>Выберите район</InputLabel>
        <Select value={selectedDistrict} onChange={handleDistrictChange}>
          {districts.map((district) => (
            <MenuItem key={district} value={district}>
              {district}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" onClick={navigateToPage}>
        Перейти на страницу
      </Button>
    </div>
  );
};

export default Header;
