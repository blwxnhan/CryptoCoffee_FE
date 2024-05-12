import React from "react";
import { 
  SafeAreaView, 
  View, 
  Text,
  StyleSheet
} from "react-native"; 

import CryptoCoffeeButton from "../components/CryptoCoffeeButton";

const Home = ({navigation: {navigate}}) => {
  return(
    <SafeAreaView>
      <View style={styles.topContainer}>
        <Text style={{ fontSize: 26, fontWeight: 900 }}> CryptoCoffee </Text>
      </View>    

      <View style={styles.buttonContainer}> 
        <CryptoCoffeeButton 
          title="주문하기"
          price="" 
          onPress={() => navigate('StackNavigation', {screen: 'Order'})} 
        />
        <CryptoCoffeeButton 
          title="쿠폰사용"
          price="" 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 47,
    flexDirection: 'row' 
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default Home; 