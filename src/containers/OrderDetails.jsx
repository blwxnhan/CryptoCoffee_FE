import React, { useState } from "react";
import { 
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions
} from "react-native";
import CustomButton from "../components/CustomButton";
import IceAndHotButton from "../components/IceAndHotButton";

const OrderDetails = ({ price, menu }) => {
    const screenWidth = Dimensions.get('window').width;

    return(
        <SafeAreaView>
            <View style={styles.topContainer}>
                 <Text style={{ fontSize: 26, fontWeight: 900 }}> CryptoCoffee </Text>
            </View> 
            <View style={styles.container}>
                <Image 
                    source={require("../../asset/Cup.png")}
                    resizeMode={'contain'}
                    style={styles.coffeeImageStyle}
                ></Image>
                <Text style={styles.coffeeTextStyle}>{menu}</Text>

                <View style={styles.iceAndHotContainer}>
                    <Text style={{ fontSize:15, fontWeight: 'medium', marginLeft: 10, marginBottom: 20 }}> ICE & HOT </Text>
                    <IceAndHotButton />
                </View>

                <View style={{ marginTop: 220 }}>
                    <View style={[ styles.priceLineStyle, { width: screenWidth }]} />
                    <View style={ styles.priceDescriptionContainer}>
                        <Text style={{ fontSize: 14, color: '#AFAFAF', marginRight: 250 }}>주문금액</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold'}}>{price}원</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 32, marginBottom: 10}}>
                        <CustomButton title={'주문하기'} height={44.55} width={358} weight={'bold'} />
                    </View>
                </View>
            </View>  
        </SafeAreaView>
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

    container: {
        marginTop: 30,
        flexDirection: 'column',
        alignItems: 'center'
    },

    coffeeImageStyle: {
        width: 55,
        height: 75, 
        marginBottom: 20
    },

    coffeeTextStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    iceAndHotContainer: {
        marginTop:57
    },

    priceLineStyle: {
        height: 1,
        backgroundColor: '#AFAFAF',
    },

    priceDescriptionContainer: {
        flexDirection: 'row',
        marginTop: 14,
        marginLeft: 17,
    },
});

export default OrderDetails;