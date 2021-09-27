import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Container = styled.div`
  display: block;
  width: 400px;

  margin-bottom: 20px;
`;

const Timer = ({ value }) => (
  <Container>
    <CircularProgressbar
      value={value}
      styles={buildStyles({
        pathColor: `rgba(206, 182, 0, ${value / 100})`,
      })}
    />
  </Container>
);

Timer.propTypes = {
  value: PropTypes.number,
};

Timer.defaultProps = {
  value: 50,
};

export default Timer;
