import defaultImg from '../../imgDefaults/default-movie.jpeg';
import {
  GenresList,
  ImgBox,
  Image,
  InfoBox,
  InfoText,
  LinkList,
  ListItem,
  MovieName,
  SectionList,
  StyledNavLink,
  Text,
  Title,
} from './MovieInfo.styled';

const MovieInfo = ({
  movie: { title, poster_path, overview, release_date, genres, vote_average },
}) => {
  return (
    <>
      <InfoBox>
        <ImgBox>
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : defaultImg
            }
            alt="title"
          />
        </ImgBox>
        <InfoText>
          <MovieName>{title}</MovieName>
          <Title>Release Date</Title>
          <Text>{release_date ? release_date : 'No data available'}</Text>
          <Title>User Score</Title>
          <Text>{vote_average ? vote_average : 'No data available'}</Text>
          <Title>Genres</Title>
          <GenresList>
            {genres?.length === 0 ? (
              <Text>No data available</Text>
            ) : (
              genres?.map(item => (
                <ListItem key={item.name}>
                  <Text>{item.name}</Text>
                </ListItem>
              ))
            )}
          </GenresList>
          <Title>Overview</Title>
          <Text>{overview ? overview : 'No data available'}</Text>
        </InfoText>
      </InfoBox>
      <SectionList>
        <LinkList>
          <ListItem>
            <StyledNavLink to="cast">Cast</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="reviews">Reviews</StyledNavLink>
          </ListItem>
        </LinkList>
      </SectionList>
    </>
  );
};

export default MovieInfo;
