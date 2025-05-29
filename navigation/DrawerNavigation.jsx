import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import FlatListComponent from '../components/FlatListComponent';
import SectionList from '../components/SectionListComponent';

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
    <Drawer.Screen name="FlatList" component={FlatListComponent}/>
    <Drawer.Screen name="SectionList" component={SectionList}/>
   </Drawer.Navigator>
  )
}

export default DrawerNavigation