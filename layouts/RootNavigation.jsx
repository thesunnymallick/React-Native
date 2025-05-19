import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import ProductsDetails from '../screens/ProductsDetails';
import TabNavigation from '../navigation/TabNavigation';

const RootNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HOME" component={TabNavigation} />
      {/* <Stack.Screen name="HOME" component={Home} /> */}
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductsDetails} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
