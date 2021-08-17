import React, { useState } from 'react';
import { CharacterList } from './view/CharacterList';
import { SearchCharacter } from './view/SearchCharacter';

export const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className='App'>
      <SearchCharacter value={searchValue} onChange={setSearchValue} />
      <CharacterList value={searchValue} />
    </div>
  );
};
