import { Box } from 'utils/Box/Box';
import { MovieList, Title } from './TrendingMovies.styled';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'service/api';
import Error from 'utils/Error/Error';
import MovieItem from 'components/MovieItem/MovieItem';
import { Loader } from 'components/Loader/Loader';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function trendigMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getTrending();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    trendigMovies();
  }, []);

  return (
    <Box>
      <Title>Trending Movies Today</Title>
      {isLoading && <Loader />}
      {error && <Error text={'No Data Found'} />}
      <MovieList>
        {movies?.map(item => {
          return (
            <MovieItem
              location={location}
              key={item.original_title}
              title={item.original_title}
              url={item.poster_path}
              activeId={item.id}
            />
          );
        })}
      </MovieList>
    </Box>
  );
};

export default TrendingMovies;
