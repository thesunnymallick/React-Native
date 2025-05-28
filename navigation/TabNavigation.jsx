import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Icon from 'react-native-vector-icons/Ionicons';
const TabNavigation = () => {
  // create tab navigation
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#64748b',
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen name="About" component={About}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="medkit-outline" size={size} color={color} />
        ),
      }}
       />
      <BottomTab.Screen name="Contact" component={Contact}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="call-outline" size={size} color={color} />
        ),
      }} />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;
