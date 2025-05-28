import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';

const DrawerNavigation = () => {
    const Drawer=createDrawerNavigator();
  return (
   <Drawer.Navigator  
     screenOptions={{
        headerShown:false
     }}
   >
    <Drawer.Screen name="Home" component={Home}/>
    <Drawer.Screen name="About" component={About}/>
    <Drawer.Screen name="Contact" component={Contact}/>
   </Drawer.Navigator>
  )
}

export default DrawerNavigation