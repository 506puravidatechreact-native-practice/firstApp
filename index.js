/**
 * @format
 */

//importatr las librerias
import React from 'react';
import {AppRegistry, View} from 'react-native';

import Header from './src/component/Header';
import CarList from './src/component/CarList';

//create component
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header title={'Cars Showroom'} />
      <CarList />
    </View>
  );
};

//render component to screen
AppRegistry.registerComponent('firstApp', () => App);
