import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import CustomButton from '../components/CustomButton';
import CustomInputField from '../components/CustomInputField';

function AuthMember() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={styles.topContainer}>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}> CryptoCoffee </Text>
      </View>
      
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={3} style={styles.descriptionText}>구성원 인증을 하시면 {"\n"}하루 한잔, 음료를 {"\n"}무료로 제공해드립니다 :)</Text>
      </View>

      <View style={styles.container}>
        <CustomInputField inputDescription="사원번호" placeholderText="사원번호를 입력하세요."/>
        <CustomInputField inputDescription="이메일" placeholderText="이메일을 입력하세요."/>
        <CustomInputField inputDescription="닉네임" placeholderText="사용하실 닉네임을 입력하세요." />
        <CustomButton title="구성원 인증"/>
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

  container: {
    alignItems: 'center',
    marginTop: 74
  },

  descriptionContainer: {
    marginLeft: 65,
  },

  descriptionText: {
    textAlign: 'left',
    fontSize: 20, 
    fontWeight: 'bold', 
    lineHeight: 40
  }
});

export default AuthMember;
