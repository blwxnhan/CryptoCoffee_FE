import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import OrderCoffee from "../containers/orderTabs/OrderCoffee";
import OrderTeaAde from "../containers/orderTabs/OrderTeaAde";
import OrderNonCoffee from "../containers/orderTabs/OrderNonCoffee";
import { TabBarItem } from "react-native-tab-view";

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator 
        initialRouteName="커피"
        screenOptions={{
            tabBarLabelStyle: { fontSize: 15, fontWeight: 'medium' },
            tabBarIndicatorStyle: { backgroundColor: 'black' }
        }}
    >
      <Tab.Screen name="커피" component={OrderCoffee} />
      <Tab.Screen name="논커피" component={OrderNonCoffee} />
      <Tab.Screen name="티/에이드" component={OrderTeaAde} />
    </Tab.Navigator>
  );
}

export default function () {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}