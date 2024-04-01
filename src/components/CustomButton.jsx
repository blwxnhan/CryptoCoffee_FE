import React from "react";
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet 
} from "react-native";

const CustomButton = (props) =>{
  console.log();
    return(
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 10,
      backgroundColor: '#274e13',
      width: 257,
      alignItems: "center",
      marginTop: 10
    },
  
    buttonText: {
      color: '#fff', 
      fontSize: 15,
      fontWeight: 'medium',
    },
});

export default CustomButton;