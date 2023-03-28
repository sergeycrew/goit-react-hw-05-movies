import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Box } from 'utils/Box/Box';
import { Loader } from 'components/Loader/Loader';
import { getMovieDetails } from '../service/api';
import { BackLink } from 'components/MovieInfo/MovieInfo.styled';
import Error from 'utils/Error/Error';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    async function loadMovieDetails() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadMovieDetails();
  }, [movieId]);

  return (
    <Box>
      <BackLink to={backLinkLocationRef.current}>Go Back</BackLink>
      {error && (
        <Error text={`Sorry, but nothing was found. Please try again!`} />
      )}
      {isLoading && <Loader />}
      <MovieInfo movie={movie} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
export default MovieDetails;
