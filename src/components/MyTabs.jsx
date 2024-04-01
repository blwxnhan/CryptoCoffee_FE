import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import OrderCoffee from "../containers/OrderCoffee";
import OrderTeaAde from "../containers/OrderTeaAde";
import OrderNonCoffee from "../containers/OrderNonCoffee";

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
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