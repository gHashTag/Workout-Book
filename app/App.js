/* @flow */

import React, {Component} from 'react';

import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  AppRegistry
} from 'react-native';

import { createStore, applyMiddleware } from 'redux'
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

import logger from './middleware/logger'

import AppWithNavigation from './containers/AppWithNavigation'

const createStoreWithMW = applyMiddleware(logger, thunk)(createStore)
const store = createStoreWithMW(reducers)

class MainScreen extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigation/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('GymApp', () => MainScreen);
