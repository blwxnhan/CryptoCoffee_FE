import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomInputField from '../components/CustomInputField';

const AuthMember = () => {
  return (
    <SafeAreaView>
      <View style={styles.topContainer}>
        <Text style={{ fontSize: 26, fontWeight: 900 }}> CryptoCoffee </Text>
      </View>
      
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={3} style={styles.descriptionText}>구성원 인증을 하시면 {"\n"}하루 한잔, 음료를 {"\n"}무료로 제공해드립니다 :)</Text>
      </View>

      <View style={styles.container}>
        <CustomInputField inputDescription="사원번호" placeholderText="사원번호를 입력하세요."/>
        <CustomInputField inputDescription="이메일" placeholderText="이메일을 입력하세요."/>
        <CustomInputField inputDescription="닉네임" placeholderText="사용하실 닉네임을 입력하세요." />
        <CustomButton title="구성원 인증" width={257} height={41.51} weight={'medium'}/>
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
