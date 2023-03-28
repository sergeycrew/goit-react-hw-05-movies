import defaultImg from '../../imgDefaults/default-movie.jpeg';
import PropTypes from 'prop-types';
import { Img, Label, LinkItem, MovieListItem } from './MovieItem.styled';

const MovieItem = ({ url, title, activeId, location }) => {
  return (
    <MovieListItem>
      <LinkItem to={`/movies/${activeId}`} state={{ from: location }}>
        <Img
          src={
            url !== null ? `https://image.tmdb.org/t/p/w300${url}` : defaultImg
          }
          alt={title}
        />
        <Label>{title}</Label>
      </LinkItem>
    </MovieListItem>
  );
};

MovieItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  activeId: PropTypes.number.isRequired,
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
};

export default MovieItem;
