import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ProductsDetails from '../screens/ProductsDetails';

const RootNavigation = () => {

    const Stack=createStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name="HOME" component={Home}/>
        <Stack.Screen name="PRODUCT_DETAILS" component={ProductsDetails}/>
    </Stack.Navigator>
  )
}

export default RootNavigation