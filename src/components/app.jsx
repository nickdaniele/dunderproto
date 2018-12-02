import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import History from './history/main';

const store = configureStore();

export default function () {
  return (
    <Provider store={store}>
      <History />
    </Provider>
  );
}
