import useGlobalGames from "./useGlobalGames";

export default function useGamesFilter({ params = {} }) {
  const games = useGlobalGames();
  const { platform, category, id } = params;

  if (id) {
    const parseId = parseInt(id);
    const game = games.filter(({ id }) => id === parseId);
    return { game };
  }

  if (category || platform) {
    const platformComparer = platform === "pc" ? "PC (Windows)" : "Web Browser";
    
    const gamesFiltered = games.filter(({ genre, platform: elePlatform }) => {
      if (category && platform) {
        return (
          genre.toLowerCase() === category && elePlatform === platformComparer
        );
      }
      return category
        ? genre.toLowerCase() === category
        : elePlatform === platformComparer;
    });
    
    return { gamesFiltered };
  }

  return { games };
}
