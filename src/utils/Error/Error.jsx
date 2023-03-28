import PropTypes from 'prop-types';
import { ErrorTitle } from './Error.styled';

const Error = ({ text }) => {
  return <ErrorTitle>{text}</ErrorTitle>;
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;
