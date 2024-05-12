import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Order from '../containers/Order';
import Home from '../containers/Home';
import OrderDetails from '../containers/OrderDetails';
import AuthMember from '../containers/AuthMember';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={"Auth"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthMember} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Order" component={Order} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
        </Stack.Navigator>
    );
}

export default StackNavigation;
