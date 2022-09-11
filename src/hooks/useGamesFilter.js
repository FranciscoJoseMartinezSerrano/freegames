import useGlobalGames from "./useGlobalGames";

export default function useGamesFilter({ params = {} }) {
  const games = useGlobalGames();

  const { platform: platformPar, category, id: idPar } = params;
  if (idPar !== undefined) {
    const id = parseInt(idPar);
    const game = games.filter((gameFilter) => gameFilter.id === id);
    return { game };
  }

  if ((category || platformPar) !== undefined) {
    const platformComparer =
      platformPar === "pc" ? "PC (Windows)" : "Web Browser";

    const gamesFiltered = games.filter((gameFilter) => {
      const { genre, platform } = gameFilter;

      if ((category && platformPar) !== undefined) {
        return (
          genre.toLowerCase() === category && platform === platformComparer
        );
      }

      return category !== undefined
        ? genre.toLowerCase() === category
        : platform === platformComparer;
    });

    return { gamesFiltered };
  }

  return { games };
}
