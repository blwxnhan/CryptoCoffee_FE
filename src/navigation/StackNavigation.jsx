import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Order from '../containers/Order';
import Home from '../containers/Home';
import OrderDetails from '../containers/OrderDetails';
import AuthMember from '../containers/AuthMember';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={"auth"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="order" component={Order} />
            <Stack.Screen name="orderDetails" component={OrderDetails}/>
            <Stack.Screen name="auth" component={AuthMember}/>
        </Stack.Navigator>
    );
}

export default StackNavigation;