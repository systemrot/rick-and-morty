import React from 'react';
import { InputSC } from './styled';

interface IProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const SearchCharacter = ({ searchValue, setSearchValue }: IProps) => {
  //   const { searchValue, setSearchValue } = props;

  return (
    <InputSC
      type='text'
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
    />
  );
};

function useSearchCharacter() {}
