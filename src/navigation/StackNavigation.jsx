import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { CommonType } from 'types/common/CommonType';
import Order from '../containers/Order';
import Home from '../containers/Home';
/*s
 * StackNavigator를 이용하여서 앱에 대한 페이지 이동을 관리합니다.
*/
const StackNavigation = () => {

    // RootStackPageList에서 페이지를 관리합니다
    const Stack = createStackNavigator();

    // const customStackNavigationOptions = {
	//     gestureEnabled: false,
	//     title: '',
	//     headerStyle: {
	//         backgroundColor: '#209bec',
	//     },
	//     headerTintColor: '#fff',
	//     headerTitleStyle: {
	//         fontWeight: 'bold',
	//     }
	// }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"home"}>
                <Stack.Screen name="home">
                    {<Home />}
                </Stack.Screen>

                <Stack.Screen name="adminScreen">
                    {<Order />}
                </Stack.Screen>
            </Stack.Navigator>
        </ NavigationContainer >
    );
}

export default StackNavigation;