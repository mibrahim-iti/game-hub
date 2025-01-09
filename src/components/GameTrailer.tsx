import useTrailers from "../hooks/useTrailers";

const GameTrailer = ({ gameId }: { gameId: number }) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = trailers?.results[0];

  return first ? <video src={first.data[480]} poster={first.preview} controls width="100%" /> : null;
};

export default GameTrailer;
