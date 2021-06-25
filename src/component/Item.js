import React from 'react';
import {View} from 'react-native';

const Item = props => {
  //hijos del modelo del carro en cuestion
  return <View style={styles.vewStyle}>{props.children}</View>;
};

//Componente para dar estilo a la etiqueta view del item, estilizar unicamente la etiqueta de la vista
const styles = {
  vewStyle: {
    backgroundColor: '#eaeaea',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#20232a',
    color: '#666',
    shadowColor: 'black',
    shadowOffSet: {width: 1, height: 1},
    shadowOpacity: 0.1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 5,
  },
};

export default Item;
