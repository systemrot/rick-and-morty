import React, { useState } from 'react';
import { useEffect } from 'react';
import { useGetCharacters } from '../../api/hooks/characters/useGetCharacters';
import { Character } from '../../components/Character';
import { Pagination } from '../../components/Pagination';
import './index.css';

interface IProps {
  value: string;
}

export const CharacterList: React.FC<IProps> = ({ value }) => {
  const [paginationUrl, setPaginationUrl] = useState<string | null>(null);
  const { data, loading, error } = useGetCharacters(value, paginationUrl);

  useEffect(() => {
    setPaginationUrl(null);
  }, [value]);

  if (loading) {
    return <p>Данные загружаются...</p>;
  }

  if (value && error) {
    return <p>Ничего не найдено</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <div className='character-list'>
        {data.results.map(character => (
          <Character key={character.id} data={character} />
        ))}
      </div>
      <Pagination info={data.info} setPaginationUrl={setPaginationUrl} />
    </>
  );
};
