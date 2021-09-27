import React from 'react';
import Timer from './Timer';

export default {
  title: 'Organisms/Timer',
  component: Timer,
};

const Template = (args) => <Timer {...args} />;

export const Example = Template.bind({});
Example.args = {
  value: 60,
};
