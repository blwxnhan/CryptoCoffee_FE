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
        <Text style={{ fontSize: 26, fontWeight: 900 }}> CryptoCoffee </Text>
      </View>    

      <View style={styles.buttonContainer}> 
        <CryptoCoffeeButton title="주문하기" />
        <CryptoCoffeeButton title="쿠폰사용" />
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