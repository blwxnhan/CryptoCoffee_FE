import React from "react";
import { 
    StyleSheet, 
    SafeAreaView,
    Text,
    View
} from "react-native";

import MyTabs from "../components/MyTabs";

const Order = () => {
    return(
        <>
        <SafeAreaView /> 
        <View style={styles.topContainer}>
            <Text style={{ fontSize: 26, fontWeight: 900 }}> CryptoCoffee </Text>
        </View> 
        <MyTabs />
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
