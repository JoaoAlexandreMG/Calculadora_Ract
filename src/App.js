// App.js
import React, { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [resultado, setResultado] = useState('');
  const [operacao, setOperacao] = useState(null);

  const handleButtonClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleOperation = (operation) => {
    const parsedValue = parseNumber(displayValue);
    if (resultado !== '' && operacao === operation) {
      setResultado(operate(resultado, parsedValue, operation));
    } else if (resultado === '') {
      setResultado(parsedValue);
    }
    setDisplayValue('');
    setOperacao(operation);
  };

  const handleEqual = () => {
    if (displayValue) {
      const parsedValue = parseNumber(displayValue);
      const newResultado = operate(resultado, parsedValue, operacao);
      setDisplayValue(newResultado.toString());
      setResultado(newResultado);
      setOperacao(null);
    }
  };

  const handleDelete = () => {
    setDisplayValue(displayValue.slice(0, -1));
  };

  const handleClear = () => {
    setDisplayValue('');
    setResultado('');
    setOperacao(null);
  };

  const parseNumber = (num) => {
    return num.includes('.') ? parseFloat(num) : parseInt(num);
  };

  const operate = (num1, num2, operation) => {
    switch (operation) {
      case 'multiply':
        return num1 * num2;
      case 'divide':
        return num1 / num2;
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      default:
        return num2;
    }
  };

  return (
    <Calculator
      displayValue={displayValue}
      handleButtonClick={handleButtonClick}
      handleDelete={handleDelete}
      handleClear={handleClear}
      handleOperation={handleOperation}
      handleEqual={handleEqual}
    />
  );
}

export default App;
