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
    borderWith: 1,
    borderColor: '#20232a',
    borderBottomWidth: 0,
    color: '#666',
    shadowColor: 'black',
    shadowOffSet: {with: 1, height: 1},
    shadowOpacity: 0.1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

export default Item;
