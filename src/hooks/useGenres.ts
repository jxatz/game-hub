//import useData from "./useData";
import genres from "../data/genres";
interface Genre {
  id: number;
  name: string;
  image_background: string;
}
//substitute the remote call for genres with static data
//const useGenres = () => useData<Genre>("/genres");

const useGenres = () => ({ data: genres, error: null, isLoading: false });

export default useGenres;
export type { Genre };
