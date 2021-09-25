import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Time from 'components/molecules/Time/Time';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  margin: 20px;
`;

const Box = styled.div`
  padding: 24px;
`;

const Summary = ({ minutes, seconds }) => (
  <Container>
    <Box>
      <Time variant={'minutes'} value={minutes} />
    </Box>
    <Box>
      <Time variant={'seconds'} value={seconds} />
    </Box>
  </Container>
);

Summary.propTypes = {
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
};

export default Summary;
