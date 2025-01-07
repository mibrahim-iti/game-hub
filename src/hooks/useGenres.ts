import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import { Genre } from "../entities/Genre";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

// const useGenres = () => useData<Genre>("/genres"); // this line will call http get genres to fetch it, but we load it static in the next line

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
