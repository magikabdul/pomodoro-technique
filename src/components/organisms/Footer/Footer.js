import React from 'react';
import styled from 'styled-components';
import Typography from 'components/atoms/Typography/Typography';
import { ReactComponent as IconCopyright } from 'assets/images/copyright.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  margin: 0 24px;
  display: flex;
  align-items: center;
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;

  color: ${({ theme }) => theme.color.text.primary};
`;

const Link = styled.a`
  &:visited {
    color: ${({ theme }) => theme.color.text.primary};
  }
`;

const Footer = () => (
  <Container>
    <IconBox>
      <IconCopyright />
    </IconBox>
    <Box>
      <Typography variant={'h2'} text={'Copyright 2021 magikabdul'} />
    </Box>
    <Box>
      <Link href={'https://produktywni.pl/blog/technika-pomodoro/'} target={'_blank'}>
        More info about pomodoro
      </Link>
    </Box>
    <Box>
      <Typography text={'Photo by Loonie Loveloonies from Pexels'} />
    </Box>
  </Container>
);

export default Footer;
