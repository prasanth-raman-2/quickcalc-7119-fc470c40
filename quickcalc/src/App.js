import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleOperation = (operation) => {
    // Clear previous error
    setError('');

    // Validate inputs
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setError('Please enter valid numbers');
      setResult(null);
      return;
    }

    // Perform calculation
    switch (operation) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case '×':
        setResult(number1 * number2);
        break;
      case '÷':
        if (number2 === 0) {
          setError('Cannot divide by zero');
          setResult(null);
        } else {
          setResult(number1 / number2);
        }
        break;
      default:
        setError('Invalid operation');
        setResult(null);
    }
  };

  return (
    <div className="app">
      <div className="calculator-container">
        <h1 className="calculator-title">QuickCalc</h1>
        
        <div className="input-group">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
            className="number-input"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
            className="number-input"
          />
        </div>

        <div className="operations-group">
          <button onClick={() => handleOperation('+')} className="operation-btn">+</button>
          <button onClick={() => handleOperation('-')} className="operation-btn">-</button>
          <button onClick={() => handleOperation('×')} className="operation-btn">×</button>
          <button onClick={() => handleOperation('÷')} className="operation-btn">÷</button>
        </div>

        <div className="result-section">
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            result !== null && (
              <div className="result">
                Result: <span className="result-value">{result}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
