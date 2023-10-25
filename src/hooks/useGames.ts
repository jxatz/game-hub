import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    // [
    //   gameQuery.genre?.id,
    //   gameQuery.platform?.id,
    //   gameQuery.sortOrder,
    //   gameQuery.searchText,
    // ]
    [gameQuery]
  );

export default useGames;
export type { Game, Platform };
