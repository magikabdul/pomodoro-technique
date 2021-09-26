import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 15% 70% 15%;
  grid-gap: 8px;

  background-color: #eee;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  & > div {
    background-color: #bbb;
    outline: 1px solid #ccc;
  }
`;
const Header = styled.div`
  outline: 1px solid #ccc;
`;
const Main = styled.div``;

const Footer = styled.div``;

const Template = () => (
  <Container>
    <Header>Title</Header>
    <Main>Main</Main>
    <Footer>Footer</Footer>
  </Container>
);

export default Template;
