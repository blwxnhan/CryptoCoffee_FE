import React from "react";
import { 
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image
} from "react-native";
import CustomButton from "../components/CustomButton";

const OrderDetails = (props) => {
    return(
        <SafeAreaView>
            <View style={styles.topContainer}>
                 <Text style={{ fontSize: 26, fontWeight: 900 }}> CryptoCoffee </Text>
            </View> 
            <View style={styles.container}>
                <Image 
                    source={require("../../asset/Cup.png")}
                    resizeMode={'contain'}
                    style={styles.imageStyle}
                ></Image>
                <Text style={styles.textStyle}>브루드 커피</Text>
                <Text style={{fontSize:15, fontWeight: 'medium'}}> ICE & HOT </Text>

                <View style={styles.selectContainer}>
                    <CustomButton title='ICE' />
                    <CustomButton title='HOT' />
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

    imageStyle: {
        width: 55,
        height: 75, 
        marginBottom: 20
    },

    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    selectContainer: {
        flexDirection: 'row'
    }

});

export default OrderDetails;