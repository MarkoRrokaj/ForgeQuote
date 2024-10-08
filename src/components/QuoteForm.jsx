import React, { useState } from 'react';
import { calculateQuotation } from '../services/calculateQuote';
import QuoteResult from './QuoteResult';

const QuoteForm = () => {
  const [materialCost, setMaterialCost] = useState(0);
  const [laborCost, setLaborCost] = useState(0);
  const [otherCost, setOtherCost] = useState(0);
  const [quote, setQuote] = useState(null);

  const handleCalculate = () => {
    const result = calculateQuotation(materialCost, laborCost, otherCost);
    setQuote(result);
  };

  return (
    <div>
      <div className='iron-voice'>
      <label>Fance (m²):</label>
        <input type="number" value={materialCost} onChange={(e) => setMaterialCost(Number(e.target.value))} />
      </div>
      <div className='iron-voice'>
        <label>Gate(m²):</label>
        <input type="number" value={materialCost} onChange={(e) => setMaterialCost(Number(e.target.value))} />
      </div>
      <div className='iron-voice'>
        <label>Labor Cost (€):</label>
        <input type="number" value={laborCost} onChange={(e) => setLaborCost(Number(e.target.value))} />
      </div>
      <div className='iron-voice'>
        <label>Other Costs (€):</label>
        <input type="number" value={otherCost} onChange={(e) => setOtherCost(Number(e.target.value))} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>

      {quote && <QuoteResult quote={quote} />}
    </div>
  );
};

export default QuoteForm;
