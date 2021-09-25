import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
`;

const VariantH1 = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;

  font-size: ${({ theme }) => theme.fontSize.l};
  letter-spacing: 2px;

  color: ${({ theme }) => theme.color.text.primary};
`;
const VariantH2 = styled.h2`
  margin: 0;
  padding: 0;

  font-size: ${({ theme }) => theme.fontSize.m};

  color: ${({ theme }) => theme.color.text.primary};
`;

const VariantParagraph = styled.p`
  margin: 0;
  padding: 0;

  font-size: ${({ theme }) => theme.fontSize.s};

  color: ${({ theme }) => theme.color.text.primary};
`;

const Typography = ({ variant, text }) => (
  <Container>
    {variant === 'h1' && <VariantH1>{text}</VariantH1>}
    {variant === 'h2' && <VariantH2>{text}</VariantH2>}
    {variant === 'paragraph' && <VariantParagraph>{text}</VariantParagraph>}
  </Container>
);

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'paragraph']),
  text: PropTypes.string.isRequired,
};

Typography.defaultProps = {
  variant: 'paragraph',
};

export default Typography;
