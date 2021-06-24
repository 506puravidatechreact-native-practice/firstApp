/**
 * @format
 */

import React, {Component, Axios} from 'react';
import {View} from 'react-native';

import axios from 'axios';

import CarDetail from './CarDetail';

class CarList extends Component {
  // Paso 1: inicializar el estado
  state = {carList: []};

  componentDidMount() {
    console.log('console from car list component');
    axios.get('https://givecars.herokuapp.com/').then(response => {
      //Paso 2: actualizar el estado, obtenemos el valos de la respuesta,
      //esta en un objeto data, asi obtenemos la data de las respuesta
      //setState es un componente que viene de la libreria component, por eso no se declara
      console.log(response.data);
      this.setState({carList: response.data});
    });
  }

  renderList = () => {
    return this.state.carList.map(brand => {
      return <CarDetail key={brand.model[0].name} brand={brand} />;
    });
  };

  render() {
    console.log(this.state);
    //return <Text>Car List</Text>;
    //aca se trata ya de mostrar el campo nombre de la lista del primer objeto a como esta implementado en el renderList {brand.model[0].name}
    return <View>{this.renderList()}</View>;
  }
}

export default CarList;
