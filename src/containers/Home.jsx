import React from "react";
import { 
  SafeAreaView, 
  View, 
  Text,
  StyleSheet
} from "react-native"; 
import CryptoCoffeeButton from "../components/CryptoCoffeeButton";

const Home = () => {
  return(
    <SafeAreaView>
      <View style={styles.topContainer}>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}> CryptoCoffee </Text>
      </View>    

      <View style={styles.buttonContainer}> 
        <CryptoCoffeeButton title="주문하기" image="../../asset/Vector.png"/>
        <CryptoCoffeeButton title="쿠폰사용" image="../../asset/Coupon.png"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    topContainer: {
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 50,
      flexDirection: 'row' 
    },

    buttonContainer: {
      flexDirection: 'row'
    }
  });

export default Home; 