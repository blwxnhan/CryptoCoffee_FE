import React from "react";
import { 
    StyleSheet, 
    SafeAreaView,
    Text,
    View
} from "react-native";

import TabNavigation from "../navigation/TabNavigation";

const Order = () => {
    return(
        <>
        <SafeAreaView  style={{ backgroundColor: 'white'}} />
            <View style={styles.topContainer}>
                <Text style={{ fontSize: 26, fontWeight: 900 }}> CryptoCoffee </Text>
            </View>
            <TabNavigation />
        </>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,
        flexDirection: 'row',
    },
});

export default Order;
