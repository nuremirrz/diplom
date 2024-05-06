import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl } from '@mui/base/FormControl';
import { InputLabel, MenuItem, Select } from '@mui/material';

const NestedDropdown = ({ onOptionChange, onSubOptionChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [subOptions, setSubOptions] = useState([]);
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [loading, setLoading] = useState(true);

  // const years = Array.from({ length: 35 }, (_, index) => 1990 + index);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://80.72.180.130:8581/api/report/get/fields');
        setOptions(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleOptionChange = (event) => {
    const optionId = event.target.value;
    setSelectedOption(optionId);
  
    const selectedOptionData = options.find(option => option.field === optionId);
    const { pdk_up, pdk_dawn, table_field, related_field } = selectedOptionData || {};
    if (selectedOptionData && selectedOptionData.children) {
      setSubOptions(selectedOptionData.children);
    } else {
      setSubOptions([]);
    }
    onOptionChange(optionId, table_field, related_field, pdk_up, pdk_dawn);
  };

  const handleSubOptionChange = (event) => {
    const subOptionId = event.target.value.id;
    const selectedSubOptionData = subOptions.find(subOption => subOption.id === subOptionId);
    
    setSelectedSubOption(selectedSubOptionData);
    
    const pdkUpForSubOption = selectedSubOptionData ? selectedSubOptionData.pdk_up : null;
    const pdkDownForSubOption = selectedSubOptionData ? selectedSubOptionData.pdk_dawn : null;
    onSubOptionChange(selectedSubOptionData, pdkUpForSubOption, pdkDownForSubOption);
  };

  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', gap: '15px' }}>     
      <FormControl>
        <InputLabel>Select an option</InputLabel>
        <Select
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {loading ? (
            <MenuItem disabled>Loading...</MenuItem>
          ) : (
            <MenuItem value="">Select an option</MenuItem>
          )}
          {options.map((option) => (
            <MenuItem key={option.field} value={option.field}>
              {option.field}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {subOptions.length > 0 && (
        <FormControl>
          <InputLabel>Select a sub-option</InputLabel>
          <Select
            value={selectedSubOption}
            onChange={handleSubOptionChange}
          >
            {subOptions.map((subOption) => (
              <MenuItem key={subOption.id} value={subOption}>
                <span dangerouslySetInnerHTML={{ __html: subOption.name }} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      
    </div>
  );
};

export default NestedDropdown;
