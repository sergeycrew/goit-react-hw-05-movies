import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Name, ReviewItem, ReviewList, Text } from './Reviews.styled';
import { getMovieReviews } from 'service/api';
import Error from 'utils/Error/Error';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadReview() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMovieReviews(movieId);
        setReview(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadReview();
  }, [movieId]);

  return (
    <ReviewList>
      {error && <Error text={'No Data Found'} />}
      {review.length === 0 && (
        <Error text={'We dont have any reviews for this movie'} />
      )}
      {isLoading && <Loader />}
      {review.map(({ author, content, id }) => (
        <ReviewItem key={id}>
          <Name>{author}</Name>
          <Text>{content}</Text>
        </ReviewItem>
      ))}
    </ReviewList>
  );
};

export default Reviews;
