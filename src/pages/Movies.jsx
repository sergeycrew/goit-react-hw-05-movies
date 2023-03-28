import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import OnSearchMovieList from 'components/OnSearchMovieList/OnSearchMovieList';
import { Box } from 'utils/Box/Box';
import SearchBar from 'components/SearchBar/SearchBar';
import Error from 'utils/Error/Error';
import { getMoviesOnSearch } from 'service/api';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reqId, setReqId] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const movieTitle = searchParams.get('movieTitle') ?? '';

  useEffect(() => {
    if (!movieTitle) {
      return;
    }
    async function setMoviesOnSearch() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMoviesOnSearch(movieTitle);
        if (data.results.length === 0) {
          setError(true);
        }
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    setMoviesOnSearch();
  }, [movieTitle, reqId]);

  const handleSubmit = value => {
    if (value === '') {
      setMovies([]);
      return setSearchParams({});
    }
    setSearchParams({ movieTitle: value });
    setReqId(nanoid());
    setMovies([]);
    setError(null);
  };

  return (
    <Box>
      <SearchBar onSubmit={handleSubmit} />
      {error && (
        <Error text={`Sorry, but nothing was found. Please try again!`} />
      )}
      {isLoading && <Loader />}
      <OnSearchMovieList movieArray={movies} />
    </Box>
  );
};
export default Movies;
