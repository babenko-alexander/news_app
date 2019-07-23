import React from 'react';
import { AppRegistry } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './app/store';

import App from './app/helpers/App';

import { name as appName } from './app.json';

const { store, persistor } = configureStore();

const PRedux = () => {
  console.log('store', store);
  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>
)};

AppRegistry.registerComponent(appName, () => PRedux);
