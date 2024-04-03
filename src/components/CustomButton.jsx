import React from "react";
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet 
} from "react-native";

const CustomButton = ({ title, width, height, weight }) =>{
    return(
        <TouchableOpacity style={[ styles.button, {width: width, height: height} ]}>
          <Text style={[styles.buttonText, {fontWeight: weight}]}>{title}</Text>
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