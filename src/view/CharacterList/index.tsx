import React from 'react';
import { CharactersResponse } from '../../api/hooks/characters/types';
import { Character } from '../../components/Character';
import './index.css';

interface IProps {
  searchValue: string;
  data: CharactersResponse;
}

export const CharacterList = ({ searchValue, data }: IProps) => {
  return (
    <div className='character-list'>
      {data.results.map(character => (
        <Character key={character.id} data={character} />
      ))}
    </div>
  );
};
