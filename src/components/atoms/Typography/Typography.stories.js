import React from 'react';
import Typography from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const HeaderH1 = Template.bind({});
HeaderH1.args = {
  variant: 'h1',
  text: 'Header type H1',
};

export const HeaderH2 = Template.bind({});
HeaderH2.args = {
  variant: 'h2',
  text: 'Header type H2',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: 'paragraph',
  text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
};
