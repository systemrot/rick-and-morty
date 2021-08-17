import React from 'react';
import './index.css';

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchCharacter: React.FC<IProps> = ({ value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <input
      className='search-character'
      type='text'
      value={value}
      onChange={handleInputChange}
    />
  );
};
