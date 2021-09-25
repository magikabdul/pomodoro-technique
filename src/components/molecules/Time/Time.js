import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Digits = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};

  font-size: ${({ theme, variant }) =>
    variant === 'minutes' ? theme.fontSize.xl : theme.fontSize.l};
`;

const Unit = styled.div`
  color: ${({ theme }) => theme.color.text.primary};

  font-size: ${({ theme, variant }) =>
    variant === 'minutes' ? theme.fontSize.m : theme.fontSize.s};
  font-weight: lighter;

  margin: ${({ variant }) => (variant === 'minutes' ? '-30px' : '-10px')};
`;

const Time = ({ variant, value }) => (
  <Container>
    <Digits variant={variant}>{value}</Digits>
    {variant === 'minutes' && <Unit variant={variant}>minutes</Unit>}
    {variant === 'seconds' && <Unit variant={variant}>seconds</Unit>}
  </Container>
);

Time.propTypes = {
  variant: PropTypes.oneOf(['minutes', 'seconds']).isRequired,
  value: PropTypes.string.isRequired,
};

export default Time;
