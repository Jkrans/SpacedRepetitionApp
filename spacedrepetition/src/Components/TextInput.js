import React, { useState } from 'react';

const TextInput = ({label, onChange, classNameInput, classNameLabel}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label className={classNameLabel}>{label}</label>
      <input className={classNameInput} type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  )
}

export default TextInput
