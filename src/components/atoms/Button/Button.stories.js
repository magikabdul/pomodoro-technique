import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Buttom',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Begin = Template.bind({});
Begin.args = {
  text: 'begin',
  variant: 'primary',
};

export const Break = Template.bind({});
Break.args = {
  text: 'Break',
  variant: 'secondary',
};
