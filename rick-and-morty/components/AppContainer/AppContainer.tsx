import React from 'react';
import AppContext from '../../services/appContext';
import CharacterService from '../../services/character.service';

const AppContainer: React.FC<{ characterData: any; episodesData: any }> = ({
  children,
  characterData,
  episodesData,
}) => {
  const [showLoader, setLoaderState] = React.useState(true);
  const [charData, setCharData] = React.useState(characterData);

  //handle next and prev click
  const handlePagination = async (page: string) => {
    //page is the url coming from next/prev
    //take only page number from url and make an api call
    const nextPageId = page.split('=')[1];
    const res = await CharacterService.fetchCharacterData(nextPageId);
    setCharData({ ...res });
  };
  return (
    <>
      <AppContext.Provider
        value={{
          showLoader,
          setLoaderState,
          characterData: charData,
          episodesData,
          handlePagination,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppContainer;
