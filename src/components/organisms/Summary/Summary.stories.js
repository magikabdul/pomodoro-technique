import React from 'react';
import Summary from './Summary';

export default {
  title: 'Organisms/Summary',
  component: Summary,
};

const Template = (args) => <Summary {...args} />;

export const Example = Template.bind({});
Example.args = {
  minutes: '11',
  seconds: '24',
};
