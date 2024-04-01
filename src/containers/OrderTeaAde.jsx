import React from "react";
import { 
    View, 
    StyleSheet 
} from "react-native";

import CryptoCoffeeButton from "../components/CryptoCoffeeButton";

const OrderTeaAde = () => {
    return(
        <View style={styles.buttonContainer}>
            <CryptoCoffeeButton title="허니 유자"/>
            <CryptoCoffeeButton title="핑크 자몽 블랙티"/>
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

export default OrderTeaAde;