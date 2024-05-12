import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import OrderCoffee from "../containers/orderTabs/OrderCoffee";
import OrderTeaAde from "../containers/orderTabs/OrderTeaAde";
import OrderNonCoffee from "../containers/orderTabs/OrderNonCoffee";
import { SafeAreaView } from "react-native";

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarLabelStyle: { fontSize: 15, fontWeight: 'medium' },
            tabBarIndicatorStyle: { backgroundColor: 'black' },
        }}
    >
      <Tab.Screen name="커피" component={OrderCoffee} />
      <Tab.Screen name="논커피" component={OrderNonCoffee} />
      <Tab.Screen name="티/에이드" component={OrderTeaAde} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
