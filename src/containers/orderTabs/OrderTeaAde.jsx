import React from "react";
import { 
    View, 
    StyleSheet 
} from "react-native";

import CryptoCoffeeButton from "../../components/CryptoCoffeeButton";

const OrderTeaAde = ({navigation}) => {
    return(
        <View style={styles.buttonContainer}>
            <CryptoCoffeeButton 
                title="허니 유자" 
                price="2200원" 
                onPress={() => navigation.navigate("orderDetails")} 
            />
            <CryptoCoffeeButton 
                title="핑크 자몽 블랙티" 
                price="2700원" 
                onPress={() => navigation.navigate("orderDetails")} 
            />
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

export default OrderTeaAde;