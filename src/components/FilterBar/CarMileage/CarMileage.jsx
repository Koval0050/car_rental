import React, { useState } from 'react';
import './CarMileageStyle.css';

const CarMileage = () => {
  const [valueFrom, setValueFrom] = useState('');
  const [valueTo, setValueTo] = useState('');

  function handleChangeValue(e, inputType) {
    const value = e.target.value;

    if (inputType === 'from') {
      setValueFrom(value);
    } else if (inputType === 'to') {
      setValueTo(value);
    }
  }

  return (
    <div className="inputsContainer">
      <input
        className="inputFrom"
        type="text"
        value={valueFrom}
        placeholder="From"
        onChange={e => handleChangeValue(e, 'from')}
      />
      <input
        className="inputTo"
        type="text"
        value={valueTo}
        placeholder="To"
        onChange={e => handleChangeValue(e, 'to')}
      />
    </div>
  );
};

export default CarMileage;
