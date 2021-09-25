import React from 'react';
import Time from './Time';

export default {
  title: 'Molecules/Time',
  component: Time,
};

const Template = (args) => <Time {...args} />;

export const Minutes = Template.bind({});
Minutes.args = {
  variant: 'minutes',
  value: '18',
};

export const Seconds = Template.bind({});
Seconds.args = {
  variant: 'seconds',
  value: '59',
};
