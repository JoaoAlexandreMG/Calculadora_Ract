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
  const parseNumber = (num) => {
    return num.includes('.') ? parseFloat(num) : parseInt(num);
  };

  const handleOperation = (operation) => {
    // Converte o valor atual do display para um número, seja inteiro ou de ponto flutuante.
    const parsedValue = parseNumber(displayValue);

    // Verifica se já há um resultado anterior e se a operação atual é a mesma da operação anterior.
    if (resultado !== '' && operacao === operation) {
      // Se houver um resultado e a operação for a mesma, realiza a operação com o resultado anterior e o novo valor.
      setResultado(operate(resultado, parsedValue, operation));
    } else if (resultado === '') {
      // Se não houver resultado anterior, define o resultado atual como o novo valor convertido.
      setResultado(parsedValue);
    }

    // Limpa o display, pois o usuário irá inserir um novo valor após a operação.
    setDisplayValue('');

    // Atualiza a operação atual para a nova operação selecionada.
    setOperacao(operation);
  };


  const handleEqual = () => {
    // Verifica se há algum valor no display antes de tentar calcular o resultado.
    if (displayValue) {
      // Converte o valor atual do display para um número, seja inteiro ou de ponto flutuante.
      const parsedValue = parseNumber(displayValue);

      // Realiza a operação matemática com o resultado armazenado, o novo valor e a operação selecionada.
      const newResultado = operate(resultado, parsedValue, operacao);

      // Atualiza o display com o novo resultado convertido para string.
      setDisplayValue(newResultado.toString());

      // Atualiza o estado do resultado com o novo valor calculado.
      setResultado(newResultado);

      // Reseta a operação, pois o cálculo foi concluído.
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
      case 'pot':
        return num1 ** num2;
      case 'rest':
        return num1 % num2;
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
