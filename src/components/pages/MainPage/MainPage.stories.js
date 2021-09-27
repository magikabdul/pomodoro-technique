import React from 'react';
import MainPage from './MainPage';

export default {
  title: 'Pages/Main',
  component: MainPage,
};

export const Main = () => <MainPage />;
Main.parameters = {
  controls: { hideNoControlsWarning: true },
};
