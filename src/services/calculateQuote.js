// services/calculateQuote.js

export const calculateQuotation = (materialCost, laborCost, otherCost, margin = 0.10) => {
    const totalCost = materialCost + laborCost + otherCost;
    const marginAmount = totalCost * margin;
    const finalQuote = totalCost + marginAmount;
  
    return { totalCost, marginAmount, finalQuote };
  };
  