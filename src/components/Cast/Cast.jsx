import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Actor, Name, Photo, PhotoList, Role } from './Cast.styled';
import { getMovieCast } from 'service/api';
import defaultCastPic from '../../imgDefaults/pexels-cottonbro-studio-3585088.jpg';
import Error from 'utils/Error/Error';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadCast() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadCast();
  }, [movieId]);

  return (
    <PhotoList>
      {error && <Error text={'No Data Found'} />}
      {cast.length === 0 && <Error text={'Cast Not Found'} />}
      {isLoading && <Loader />}
      {cast.map(({ id, profile_path, name, character }) => (
        <Actor key={id}>
          <Photo
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultCastPic
            }
          />
          <Name>{name}</Name>
          <Role>{character}</Role>
        </Actor>
      ))}
    </PhotoList>
  );
};

export default Cast;
