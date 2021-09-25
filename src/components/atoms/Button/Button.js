import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.button`
  width: 150px;
  height: 150px;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.color.background.primary : theme.color.background.secondary};

  font-family: inherit;
  font-size: 40px;
  text-transform: uppercase;

  border-radius: 50%;
  border: ${({ theme }) => `3px solid ${theme.color.text.primary}`};

  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === 'primary'
        ? theme.color.background.primaryNoOpacity
        : theme.color.background.secondaryNoOpacity};
  }
`;

const Button = ({ text, variant }) => <Container variant={variant}>{text}</Container>;

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  text: 'Hello',
  variant: 'primary',
};

export default Button;
