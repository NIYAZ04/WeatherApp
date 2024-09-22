import React, { useState } from 'react';
import './SearchInput.css';

function SearchInput({ onCityChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityChange(inputValue);
    setInputValue(''); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchInput;
