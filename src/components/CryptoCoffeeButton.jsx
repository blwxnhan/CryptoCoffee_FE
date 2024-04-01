import React from "react";
import { 
    Image,
    StyleSheet, 
    TouchableOpacity,
    Text
} from "react-native"; 

const CryptoCoffeeButton = (props) => {
    return(
        <TouchableOpacity 
            style={styles.button}
            onPress={() => (alert("Click!"))}
        >
            <Image 
                style={styles.buttonImage} 
                source={require("../../asset/Coupon.png")}
                resizeMode={'contain'}
            ></Image>
            <Text style={styles.buttonTitleText}>{props.title}</Text>
            <Text style={styles.buttonPriceText}>{props.price}</Text>
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

        shadowColor: '#AFAFAF',
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

    buttonTitleText: {
        fontSize: 15, 
        fontWeight: 'medium', 
        textAlign: 'center',
        marginBottom: 5
    },

    buttonPriceText: {
        fontSize: 11,
        fontWeight: 'regular',
        textAlign: 'center',
        color: '#AFAFAF'
    }
});

export default CryptoCoffeeButton;