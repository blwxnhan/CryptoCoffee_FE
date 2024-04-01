import React from 'react';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import AuthMember from './src/containers/AuthMember';
import Home from './src/containers/Home';
import Order from './src/containers/Order';
import OrderCoffee from './src/containers/OrderCoffee';
import OrderNonCoffee from './src/containers/OrderNonCoffee';
import OrderTeaAde from './src/containers/OrderTeaAde';

const App = () => {
  return (
    <Order />
  );
}

export default App;
