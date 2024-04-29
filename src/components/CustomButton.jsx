import React from "react";
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet 
} from "react-native";

const CustomButton = props =>{
    return(
      <TouchableOpacity 
          style={[ styles.button, {width: props.width, height: props.height} ]} 
          onPress={() => props.onPress()}>
        <Text style={[styles.buttonText, {fontWeight: props.weight}]}>{props.title}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: '#274e13',
      alignItems: 'center',
      margin: 5
    },
  
    buttonText: {
      color: '#ffffff', 
      fontSize: 15,
    },
});

export default CustomButton;