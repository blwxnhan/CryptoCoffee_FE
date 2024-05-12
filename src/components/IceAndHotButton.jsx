import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    Text 
} from 'react-native';

const IceAndHotButton = () => {
    const [selectedButton, setSelectedButton] = useState('ICE'); // 선택된 버튼 상태를 저장

    const handleButtonPress = (buttonType) => {
        setSelectedButton(buttonType); // 선택된 버튼을 업데이트
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: selectedButton === 'ICE' ? '#274e17' : '#FFFFFF' }]}
                onPress={() => handleButtonPress('ICE')}
            >
                <Text style={[styles.buttonText, { color: selectedButton === 'ICE' ? '#FFFFFF' : '#274e17' }]}>ICE</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: selectedButton === 'HOT' ? '#274e17' : '#FFFFFF' }]}
                onPress={() => handleButtonPress('HOT')}
            >
                <Text style={[styles.buttonText, { color: selectedButton === 'HOT' ? '#FFFFFF' : '#274e17' }]}>HOT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },

    button: {
        width: 157,
        height: 35.23,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#274e17',
        margin: 10
    },

    buttonText: {
        fontWeight: 'bold',
    },
});

export default IceAndHotButton;
