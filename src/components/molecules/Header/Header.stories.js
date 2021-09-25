import React from 'react';
import Header from './Header';

export default {
  title: 'Molecules/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const MainHeader = Template.bind({});
