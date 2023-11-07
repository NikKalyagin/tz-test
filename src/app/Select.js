import React, { useState } from 'react';
import './Select.css';

const Select = ({ options, selectedValue, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="select">
      <div className="select__control" onClick={handleToggle}>
        <div className="select__selected-value">{selectedValue || placeholder}</div>
        <img className={`select__arrow ${isOpen ? 'select__arrow--open' : ''}`} src="arrowSelect.svg" alt="arrow" />
      </div>
      {isOpen && (
        <div className="select__options">
          {options.map((option) => (
            <div key={option.id} onClick={() => handleSelect(option)} className="select__option">
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;