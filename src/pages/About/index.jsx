import "./About.css";
import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | freeGames</title>
        <meta name="description" content={"freeGames project information"} />
        <link
          rel="canonical"
          href={"https://freegames.vercel.app/freegames/about"}
        />
        <script src="https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js"></script>
      </Helmet>
      <h1 className="about-h1">Information about freeGames project</h1>
      <section className="about">
        <article className="about-info">
          <h4>
            This is a small project made by a React junior developer using a
            free API provide by FreeToGame.com
          </h4>

          <a
            href="https://github.com/FranciscoJoseMartinezSerrano/freegames"
            target="_blank"
            rel="noreferrer"
          >
            <iconify-icon inline icon="logos:github-icon" width="100" /> See the
            code in github
          </a>
        </article>
        <article className="about-api">
          <h2>API providers</h2>
          <ul>
            <li>
              <a
                href="https://www.freetogame.com/api-doc"
                target="_blank"
                rel="noreferrer"
              >
                FreeToGame
              </a>
            </li>
            <li>
              <a
                href="https://rapidapi.com/digiwalls/api/free-to-play-games-database"
                target="_blank"
                rel="noreferrer"
              >
                RapidAPI
              </a>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
