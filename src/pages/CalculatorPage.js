import React from 'react';
import Calculator from '../components/Calculator';
import './Pages.css';

const CalculatorPage = () => (
  <div className="calculatorpageContainer">
    <h2>Let&apos;s do some math!</h2>
    <div className="calcDiv">
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
