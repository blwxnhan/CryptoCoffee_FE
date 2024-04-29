import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import Order from './src/containers/Order';

const App = () => {
  return (
    // <NavigationContainer>
    //   <StackNavigation />
    // </NavigationContainer>
    <>
    <Order />
    </>
  );
}

export default App;
