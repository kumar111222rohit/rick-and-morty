import React from 'react';
import useStore from '../../hooks/useStore';
import Character from '../Character/Character';

const App = () => {
  const { characterData, episodesData, handlePagination } = useStore();

  return (
    <>
      <Character
        characterData={characterData}
        handlePagination={handlePagination}
        episodesData={episodesData}
      />
    </>
  );
};

export default App;
