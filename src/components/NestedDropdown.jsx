import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl } from '@mui/base/FormControl';
import { InputLabel, MenuItem, Select } from '@mui/material';

const NestedDropdown = () => {
  const [options, setOptions] = useState([1]);
  const [selectedOption, setSelectedOption] = useState('');
  const [subOptions, setSubOptions] = useState([]);
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [loading, setLoading] = useState(true);

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

  const handleOptionChange = async (event) => {
    const optionId = event.target.value;
    setSelectedOption(optionId);
    setSelectedSubOption(''); // Reset selected sub-option when main option changes

    const selectedOptionData = options.find(option => option.field === optionId);
    if (selectedOptionData && selectedOptionData.children) {
      setSubOptions(selectedOptionData.children);
    } else {
      setSubOptions([]);
    }
  };

  const handleSubOptionChange = (event) => {
    setSelectedSubOption(event.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
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
              <MenuItem key={subOption.id} value={subOption.name}>
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