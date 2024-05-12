import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './src/navigation/RootStackNavigation';
import OrderDetails from './src/containers/OrderDetails';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
}

export default App;
