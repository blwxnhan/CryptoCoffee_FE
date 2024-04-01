import React from "react";
import { 
    Image,
    StyleSheet, 
    TouchableOpacity,
    Text
} from "react-native"; 

const CryptoCoffeeButton = (props) => {
    return(
        <TouchableOpacity style={styles.button}>
            <Image 
                style={styles.buttonImage}
                source={require("../../asset/Coupon.png")}
            ></Image>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 124,
        width: 149,
        marginLeft: 45,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',

        shadowColor: 'rgb(50,50,50)',
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
    },

    buttonImage: {
        justifyContent: 'center',
        height: 50,
        width: 45,
        marginBottom: 20,
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 50
    },

    buttonText: {
        fontSize: 15, 
        fontWeight: 'medium', 
        textAlign: 'center'
    },
});

export default CryptoCoffeeButton;