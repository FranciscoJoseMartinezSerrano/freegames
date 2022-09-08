import React from "react";
import { Link } from "wouter";


export default function Game({
  thumbnail,
  title,
  release_date,
  short_description,
  id,
  genre,
  platform,
}) {
  return (
    <section className="game">
      <Link to={`/game/${id}`}>
        <img src={thumbnail} alt={title} />
      </Link>
      <article className="game-info">
        <Link to={`/game/${id}`}>
          <h4>{title}</h4>{" "}
        </Link>
        <p className="game-info-small">
          <small>
            {genre} - {platform}
          </small>
          <small>{release_date}</small>
        </p>
        <p>{short_description}</p>
      </article>
    </section>
  );
}
