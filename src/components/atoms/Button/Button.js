import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.button`
  background-color: ${({ background }) => background};

  font-family: inherit;
  font-size: 40px;
`;

const Button = ({ text, background }) => <Container background={background}>{text}</Container>;

Button.propTypes = {
  text: PropTypes.string,
  background: PropTypes.string,
};

Button.defaultProps = {
  text: 'Hello',
  background: 'violet',
};

export default Button;
