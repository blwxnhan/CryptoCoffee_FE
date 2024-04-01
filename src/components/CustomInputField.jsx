import React from "react";
import { 
  StyleSheet, 
  TextInput, 
  Text, 
  View 
} from "react-native";

const CustomInputField = (props) => {
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 15, fontWeight: '400'}}> {props.inputDescription} </Text>
        <TextInput placeholder={props.placeholderText} style={styles.inputStyle}></TextInput>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      paddingBottom: 20,
    },
  
    inputStyle: {
      marginTop: 10,
      marginLeft: 7,
      borderBottomWidth: 1,
      width: 270,
      height: 40
    },
});

export default CustomInputField;