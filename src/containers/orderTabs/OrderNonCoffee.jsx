import React from "react";
import { 
    View,
    StyleSheet 
} from "react-native";

import CryptoCoffeeButton from "../../components/CryptoCoffeeButton";

const OrderNonCoffee = () => {
    return(
        <View style={styles.buttonContainer}>
            <CryptoCoffeeButton title="핫초코"/>
            <CryptoCoffeeButton title="허니밀크티"/>
        </View>       
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 26
    }
});

export default OrderNonCoffee;