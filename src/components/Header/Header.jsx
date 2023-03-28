import {
  HeaderSection,
  NavList,
  NavListItem,
  StyledLink,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderSection>
      <NavList>
        <NavListItem>
          <StyledLink to="/">Home</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="movies">Movies</StyledLink>
        </NavListItem>
      </NavList>
    </HeaderSection>
  );
};

export default Header;
