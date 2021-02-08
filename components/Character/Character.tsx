import React from "react";
import { useTranslation } from "../../i18n";
import useStore from "../../hooks/useStore";
import "./Character.scss";
import Footer from "../Footer/Footer";
import { CharacterProps } from "../../types/characterData";

const Character: React.FC<CharacterProps> = ({
  characterData,
  handlePagination,
  episodesData = [],
}) => {
  const [t] = useTranslation();
  const { showLoader, setLoaderState } = useStore();

  const getFirstSeenEpisodeName = (episodeURL: string) => {
    const splitArr = episodeURL.split("/");
    const eid = parseInt(splitArr[splitArr.length - 1]);
    const firstEP = episodesData.find((e: any) => e.id === eid);
    return firstEP.name;
  };
  React.useEffect(() => {
    setLoaderState(false);
  }, [characterData]);

  return (
    <>
      <section className="showcase-wrapper">
        {characterData.results.map((item) => {
          return (
            <article className="character-card" key={item.id}>
              <div className="image-wrapper">
                <img className="image" src={item.image} alt="character" />
              </div>
              <div className="content-wrapper">
                <div className="section">
                  <a
                    href={item.url}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="external-link"
                  >
                    <h2 id="charName">{item.name}</h2>
                  </a>
                  <span className="status">
                    <span
                      className={`icon ${
                        item.status === "Dead" ? "icon-dead" : "icon-alive"
                      }`}
                    ></span>
                    {item.status} - {item.species}
                  </span>
                </div>
                <div className="section">
                  <span className="text-gray">{t("last_location")}</span>
                  <a
                    href="https://rickandmortyapi.com/api/location/6"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="external-link"
                  >
                    {item.location.name}
                  </a>
                </div>
                <div className="section">
                  <span className="text-gray">First seen in </span>
                  <a
                    href="https://rickandmortyapi.com/api/location/6"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    className="external-link"
                  >
                    {getFirstSeenEpisodeName(item.episode[0])}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <article className="pagination-wrapper">
        <button
          className="btn"
          onClick={() => handlePagination(characterData.info.prev)}
          disabled={characterData.info.prev !== null ? false : true}
        >
          Prev
        </button>
        <button
          className="btn"
          onClick={() => handlePagination(characterData.info.next)}
          disabled={characterData.info.next !== null ? false : true}
        >
          Next
        </button>
      </article>

      <Footer count={characterData.info.count} />
    </>
  );
};

export default Character;
