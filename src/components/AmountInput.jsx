import React from 'react';

const AmountInput = ({ amount, onChange }) => (
  <div>
    <label>Amount</label>
    <input
      type="number"
      value={amount || ''} 
      onChange={e => onChange(isNaN(e.target.valueAsNumber) ? '' : e.target.valueAsNumber)}
      className="amount-input"
    />
  </div>
);

export default AmountInput;
