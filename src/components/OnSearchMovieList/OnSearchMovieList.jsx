import MovieItem from 'components/MovieItem/MovieItem';
import { MovieList } from 'components/TrendingMovieList/TrendingMovies.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const OnSearchMovieList = ({ movieArray }) => {
  const location = useLocation();
  return (
    <MovieList>
      {movieArray?.map(item => {
        return (
          <MovieItem
            location={location}
            key={item.id}
            title={item.original_title}
            url={item.poster_path}
            activeId={item.id}
          />
        );
      })}
    </MovieList>
  );
};

export default OnSearchMovieList;

OnSearchMovieList.propTypes = {
  movieArray: PropTypes.array,
};
