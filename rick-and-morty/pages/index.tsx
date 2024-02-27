import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useTranslation } from '../i18n';
import {
  processCharacterData,
  processEpisodesData,
} from '../utils/processCharacterData';
import CharacterService from '../services/character.service';
import Loader from '../components/Loader/Loader';
import AppContainer from '../components/AppContainer';
import App from '../components/App';

function Home({
  data = {},
  episodesData = {},
}: {
  data: any;
  episodesData: any;
}) {
  const [t] = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <AppContainer characterData={data} episodesData={episodesData}>
        <Loader />
        <App />
      </AppContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const episodesData = await CharacterService.fetchEpisodeData();
  const data = await CharacterService.fetchCharacterData(0);
  if (!data) {
    res.statusCode = 302;
    res.setHeader('Location', `https://rickandmortyapi.com/`);
    return { props: {} };
  }
  // console.log(data);
  return {
    props: {
      data: processCharacterData(data),
      episodesData: processEpisodesData(episodesData),
    },
  };
};

export default Home;
