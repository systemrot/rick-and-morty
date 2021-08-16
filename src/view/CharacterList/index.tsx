import React from 'react';
import { useGetCharacters } from '../../api/hooks/characters/useGetCharacters';
import { Character } from '../../components/Character';
import { Wrapper } from './styled';

interface IProps {
  searchValue: string;
}

export const CharacterList = ({ searchValue }: IProps) => {
  const { data, loading } = useGetCharacters(searchValue);

  if (loading) return <p>Loading...</p>;

  return (
    <Wrapper>
      {data.results.map((character: any) => (
        <Character key={character.id} data={character} />
      ))}
    </Wrapper>
  );
};
