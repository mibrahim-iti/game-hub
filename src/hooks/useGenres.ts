import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const mapToGenre = (genre: Genre): Genre => ({
  id: genre.id,
  name: genre.name,
  image_background: genre.image_background,
});

// const useGenres = () => useData<Genre>("/genres"); // this line will call http get genres to fetch it, but we load it static in the next line

const useGenres = () => ({ data: genres.results.map(mapToGenre), error: null, isLoading: false });

export default useGenres;
