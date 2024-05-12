import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigation from "./StackNavigation";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

const RootStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StackNavigation" component={StackNavigation}/>
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
        </Stack.Navigator>
    );
}

export default RootStackNavigation;