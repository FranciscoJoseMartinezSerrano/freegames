import useGlobalGames from "./useGlobalGames";

export default function useGamesFilter({ params = {} }) {
  const games = useGlobalGames();
  const { platform, category } = params;

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
