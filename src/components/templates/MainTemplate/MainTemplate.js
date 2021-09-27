import React from 'react';
import styled from 'styled-components';
import background from 'assets/images/night-city.jpg';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: grid;
  grid-template-rows: 15% 70% 15%;
  grid-gap: 8px;

  background-image: ${`url(${background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  background-color: #eee;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  & > div {
    background-color: ${({ header, main, footer }) =>
      header || main || footer ? 'undefined' : 'rgba(187, 187, 187, 0.5)'};
    outline: ${({ header }) => (header ? 'undefined' : '1px solid #ccc')};
  }
`;
const Header = styled.div`
  outline: 1px solid #ccc;
`;
const Main = styled.div``;

const Footer = styled.div``;

const Template = ({ header, main, footer }) => (
  <Container header={header}>
    {header || <Header>Title</Header>}
    {main || <Main>Main</Main>}
    {footer || <Footer>Footer</Footer>}
  </Container>
);

Template.propTypes = {
  header: PropTypes.element,
  main: PropTypes.element,
  footer: PropTypes.element,
};

Template.defaultProps = {
  header: null,
  main: null,
  footer: null,
};

export default Template;
