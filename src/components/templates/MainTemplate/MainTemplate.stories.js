import React from 'react';
import Template from './MainTemplate';

export default {
  title: 'Template/MainPage',
  component: Template,
};

export const MainPage = () => <Template />;
MainPage.parameters = {
  controls: { hideNoControlsWarning: true },
};
