import React, { useState } from 'react';
import { CharacterList } from './view/CharacterList';
import { SearchCharacter } from './view/SearchCharacter';
import { Pagination } from './components/Pagination';
import { useGetCharacters } from './api/hooks/characters/useGetCharacters';

export const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [paginationUrl, setPaginationUrl] = useState<string | null>(null);
  const { data, loading } = useGetCharacters(searchValue, paginationUrl);

  return (
    <div className='App'>
      <SearchCharacter
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {loading && <p>Loading...</p>}
      {data && <CharacterList data={data} searchValue={searchValue} />}
      {data && (
        <Pagination info={data.info} setPaginationUrl={setPaginationUrl} />
      )}
    </div>
  );
};
