import React from 'react';
import styled from 'styled-components';
import Timer from 'components/organisms/Timer/Timer';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Header from 'components/molecules/Header/Header';
import Summary from 'components/organisms/Summary/Summary';
import Button from 'components/atoms/Button/Button';
import Footer from 'components/organisms/Footer/Footer';

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeBox = styled.div`
  position: relative;

  & > .tb__summary {
    position: absolute;
    top: calc(50% - (190px / 2));
    left: 0;
    right: 0;
  }
`;

const MainSection = () => (
  <Container>
    <TimeBox>
      <Timer value={45} />
      <div className={'tb__summary'}>
        <Summary className={'tb__summary'} minutes={'17'} seconds={'23'} />
      </div>
    </TimeBox>
    <Button variant={'primary'} text={'begin'} />
  </Container>
);

const MainPage = () => (
  <MainTemplate header={<Header />} main={<MainSection />} footer={<Footer />} />
);

export default MainPage;
