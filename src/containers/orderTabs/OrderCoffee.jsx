import React from "react";
import { 
    View,
    StyleSheet 
} from "react-native";

import CryptoCoffeeButton from "../../components/CryptoCoffeeButton";

const OrderCoffee = () => {
    return(
        <View style={styles.buttonContainer}>
            <CryptoCoffeeButton title="브루드 커피" price="1800원"/>
            <CryptoCoffeeButton title="카페라떼" price="2500원"/>
        </View>  
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 26,
        justifyContent: 'center'
    }
});

export default OrderCoffee;