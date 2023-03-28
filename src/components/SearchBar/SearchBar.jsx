import { useState } from 'react';
import PropTypes from 'prop-types';
const {
  StyledForm,
  StyledLabel,
  StyledInput,
  SearchButon,
} = require('./SearchBar.styled');

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  const handleOnChange = e => {
    setQuery(e.target.value.toLowerCase().trim());
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="search">Find Movie by Name</StyledLabel>
      <StyledInput
        type="text"
        name="search"
        value={query}
        onChange={handleOnChange}
        placeholder="Search movie..."
        autoComplete="off"
      />
      <SearchButon type="submit">Search</SearchButon>
    </StyledForm>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
