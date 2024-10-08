import React from 'react';

const QuoteResult = ({ quote }) => {
  return (
    <div>
      <h3>Quotation Results</h3>
      <p><strong>Total Cost:</strong> ${quote.totalCost.toFixed(2)}</p>
      <p><strong>Margin (10%):</strong> ${quote.marginAmount.toFixed(2)}</p>
      <p><strong>Final Quotation:</strong> ${quote.finalQuote.toFixed(2)}</p>
    </div>
  );
};

export default QuoteResult;
