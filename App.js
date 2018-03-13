import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/configureStore';
import Home from './src/views/Home'
import Favorites from './src/views/Favorites'
import TabNavigator from './src/TabNavigator'

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator/>
      </Provider>
    );
  }
}