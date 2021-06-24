/**
 * @format
 */

//importatr las librerias
import React from 'react';
import {Text, AppRegistry} from 'react-native';

//create component
const App = () => {
  return <Text>Hi there</Text>;
};

//make a component avaibale to other component
AppRegistry.registerComponent('firstApp', () => App);
