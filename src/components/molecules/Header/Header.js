import React from 'react';
import styled from 'styled-components';
import Typography from 'components/atoms/Typography/Typography';

const Container = styled.div``;

const Header = () => (
  <Container>
    <Typography variant="h1" text="POMODORO TIMER" />
  </Container>
);

export default Header;
