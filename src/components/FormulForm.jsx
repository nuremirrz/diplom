import React, { useState } from 'react';
import { Button, Input, Typography } from '@mui/material';

const ChemicalFormulaInput = () => {
  const [formulas, setFormulas] = useState([{ id: 1, value: '' }]);
  const [result, setResult] = useState('');

  const addFormulaField = () => {
    const newId = formulas.length + 1;
    setFormulas([...formulas, { id: newId, value: '' }]);
  };

  const removeFormulaField = (id) => {
    const updatedFormulas = formulas.filter((formula) => formula.id !== id);
    setFormulas(updatedFormulas);
  };

  const handleFormulaChange = (id, value) => {
    const updatedFormulas = formulas.map((formula) =>
      formula.id === id ? { ...formula, value } : formula
    );
    setFormulas(updatedFormulas);
  };

  const calculateResult = () => {
    // Здесь вы можете добавить ваш код для расчета результата связей химических элементов
    // Например, использовать библиотеку для химических вычислений или свою логику
    // В данном примере мы просто объединяем все формулы через запятую
    const resultString = formulas.map((formula) => formula.value).join(', ');
    setResult(resultString);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '30px', alignItems: 'center', flexDirection: 'column', margin: '30px'}}>
      <Typography variant="h6">Химические формулы</Typography>
      {formulas.map((formula) => (
        <div key={formula.id} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <Input
            placeholder="Введите химическую формулу"
            value={formula.value}
            onChange={(e) => handleFormulaChange(formula.id, e.target.value)}
          />
          <Button
            variant="outlined"
            color="error"
            style={{ marginLeft: '10px' }}
            onClick={() => removeFormulaField(formula.id)}
          >
            Удалить поле
          </Button>
        </div>
      ))}
      <Button variant="contained" onClick={addFormulaField}>
        Добавить поле
      </Button>
      <Button variant="contained" style={{ marginLeft: '10px' }} onClick={calculateResult}>
        Рассчитать результат
      </Button>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
        Результат: {result}
      </Typography>
    </div>
  );
};

export default ChemicalFormulaInput;
