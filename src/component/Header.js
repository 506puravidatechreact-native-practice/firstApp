//importatr las librerias
import React from 'react';
import {Text, View} from 'react-native';

//create component
const Header = () => {
  const {textStyling, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyling}>FirstApp</Text>
    </View>
  );
};

//create style manually
const styles = {
  textStyling: {
    fontSize: 22,
  },

  viewStyle: {
    backgroundColor: "gainsboro",
    heigh: 70,
    justifyContenr: "center",
    alignItems: "center",
    paddingTop: 35,
  },
};

//make a component available to other component
export default Header;
