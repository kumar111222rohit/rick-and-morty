import React from 'react';
import { useTranslation } from '../../i18n';
import useStore from '../../hooks/useStore';
import styles from './Character.module.scss'; // Correctly import as a module
import Footer from '../Footer/Footer';
import { CharacterProps } from '../../types/characterData';

const Character: React.FC<CharacterProps> = ({
  characterData,
  handlePagination,
  episodesData = [],
}) => {
  const [t] = useTranslation();
  const { setLoaderState } = useStore();

  // Get the episodes in which the character was seen for the first time
  const getFirstSeenEpisodeName = (episodeURL: string) => {
    const splitArr = episodeURL.split('/');
    const eid = parseInt(splitArr[splitArr.length - 1]);
    const firstEP = episodesData.find((e: any) => e.id === eid);
    return firstEP ? firstEP.name : 'Unknown'; // Ensure you handle possible undefined return
  };

  React.useEffect(() => {
    setLoaderState(false);
  }, [characterData]);

  return (
    <>
      <section className={styles.showcaseWrapper}>
        {characterData.results.map(item => (
          <article className={styles.characterCard} key={item.id}>
            <div className={styles.imageWrapper}>
              <img className={styles.image} src={item.image} alt='character' />
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.section}>
                <a
                  href={item.url}
                  rel='nofollow noopener noreferrer'
                  target='_blank'
                  className={styles.externalLink}
                >
                  <h2 id='charName'>{item.name}</h2>
                </a>
                <span className={styles.status}>
                  <span
                    className={`${styles.icon} ${
                      item.status === 'Dead' ? styles.iconDead : styles.iconAlive
                    }`}
                  ></span>
                  {item.status} - {item.species}
                </span>
              </div>
              <div className={styles.section}>
                <span className={styles.textGray}>{t('last_location')}</span>
                <a
                  href={item.location.url}
                  rel='nofollow noopener noreferrer'
                  target='_blank'
                  className={styles.externalLink}
                >
                  {item.location.name}
                </a>
              </div>
              <div className={styles.section}>
                <span className={styles.textGray}>First seen in</span>
                <a
                  href={item.episode[0]}
                  rel='nofollow noopener noreferrer'
                  target='_blank'
                  className={styles.externalLink}
                >
                  {getFirstSeenEpisodeName(item.episode[0])}
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
      <article className={styles.paginationWrapper}>
        <button
          className={styles.btn}
          onClick={() => handlePagination(characterData.info.prev)}
          disabled={!characterData.info.prev}
        >
          Prev
        </button>
        <button
          className={styles.btn}
          onClick={() => handlePagination(characterData.info.next)}
          disabled={!characterData.info.next}
        >
          Next
        </button>
      </article>

      <Footer count={characterData.info.count} />
    </>
  );
};

export default Character;
