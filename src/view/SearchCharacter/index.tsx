import React from 'react';
import './index.css';
interface IProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const SearchCharacter: React.FC<IProps> = ({
  searchValue,
  setSearchValue,
}: IProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return (
    <input
      className='search-character'
      type='text'
      value={searchValue}
      onChange={handleInputChange}
    />
  );
};
