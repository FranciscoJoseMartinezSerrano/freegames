import "./DetailGame.css";
import React from "react";
import Slider from "components/Slider/Slider";
import DetailGameList from "./DetailGameList";

export default function DetailGame({ game = {} }) {
  const screenshotsMap = game.screenshots.map(({ image }) => image);
  const screenshots = [game.thumbnail, ...screenshotsMap];
  const companyDetail = {
    Developer: game.developer,
    Publiser: game.publisher,
    Genre: game.genre,
    Platform: game.platform,
    Date: game.release_date,
  };

  return (
    <>
      {game.id ? (
        <section className="detail-game">
          <article className="detail-info-top">
            <Slider imgs={screenshots} title={game.title} />
            <article className="detail-requirements">
              <h4>System requirements</h4>
              <DetailGameList item={game.minimum_system_requirements} />
            </article>
            <section className="detail-company">
              <DetailGameList item={companyDetail} />
            </section>
          </article>
          <article className="detail-info-bottom">
            <h1>{game.title}</h1>
            <p>{game.description}</p>
            <a href={game.game_url} target="_blank" rel="noreferrer">
              Go to their website
            </a>
          </article>
        </section>
      ) : (
        <h2>Something went wrong</h2>
      )}
    </>
  );
}
