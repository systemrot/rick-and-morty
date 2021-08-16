import React, { useState } from 'react';
import { Wrapper } from './styled';
import { CharacterList } from './view/CharacterList';
import { SearchCharacter } from './view/SearchCharacter';

export const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <Wrapper className='App'>
      <SearchCharacter
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <CharacterList searchValue={searchValue} />
    </Wrapper>
  );
};
