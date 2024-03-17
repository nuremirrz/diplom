import React, { useState, useEffect } from 'react';
import { FormControl } from '@mui/base/FormControl';
import { InputLabel, MenuItem, Button, Select } from '@mui/material';
import { baseURL } from '../services/apiConfig';

const Header = ({ selectedYear, selectedDistrict, onYearChange, onDistrictChange, onSearch }) => {
  const [districts, setDistricts] = useState([]);
  const years = Array.from({ length: 35 }, (_, index) => 1990 + index);

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch(`${baseURL}/get/districts/1`);
        const data = await response.json();
        setDistricts(data.data);
      } catch (error) {
        console.error('Ошибка при получении районов:', error);
      }
    };

    fetchDistricts();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: '30px', alignItems: 'center', margin: '30px' }}>
      <FormControl>
        <InputLabel>Выберите год</InputLabel>
        <Select value={selectedYear} onChange={onYearChange}>
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Выберите район</InputLabel>
        <Select value={selectedDistrict} onChange={onDistrictChange}>
          {districts.map((district) => (
            <MenuItem key={district.id} value={district.id}>
              {district.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" onClick={onSearch}>
        Найти
      </Button>
    </div>
  );
};

export default Header;
