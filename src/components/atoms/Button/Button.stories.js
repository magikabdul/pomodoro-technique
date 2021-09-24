import React from 'react';
import theme from 'theme/MainTheme';
import Button from './Button';

export default {
  title: 'Atoms/Buttom',
  component: Button,
  argsType: {
    background: {
      control: 'color',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'hello',
  background: theme.color.text.primary,
};
