/**
 * @format
 */

//importatr las librerias
import React from 'react';
import {AppRegistry} from 'react-native';

import Header from './src/component/Header';

//create component
const App = () => {
  return <Header />;
};

//render component to screen
AppRegistry.registerComponent('firstApp', () => App);
