import React from 'react';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import AuthMember from './src/containers/AuthMember';
import Home from './src/containers/Home';
import Order from './src/containers/Order';
import OrderCoffee from './src/containers/orderTabs/OrderCoffee';
import OrderNonCoffee from './src/containers/orderTabs/OrderNonCoffee';
import OrderTeaAde from './src/containers/orderTabs/OrderTeaAde';
import OrderDetails from './src/containers/OrderDetails';

const App = () => {
  return (
    <OrderDetails price={'1800'} />
  );
}

export default App;
