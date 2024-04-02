import React from 'react';

import AuthMember from './src/containers/AuthMember';
import Home from './src/containers/Home';
import Order from './src/containers/Order';
import OrderCoffee from './src/containers/orderTabs/OrderCoffee';
import OrderNonCoffee from './src/containers/orderTabs/OrderNonCoffee';
import OrderTeaAde from './src/containers/orderTabs/OrderTeaAde';
import OrderDetails from './src/containers/OrderDetails';

const App = () => {
  return (
    <>
      {/* <OrderDetails menu={'브루드 커피'} price={'1800'} /> */}
      {/* <AuthMember /> */}
      <Home />
      {/* <Order /> */}
    </>
  );
}

export default App;
