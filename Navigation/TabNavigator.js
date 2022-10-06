import {  } from 'react-native'
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../components/Home/Home';
import Search from '../components/Search/Search';
import Shop from '../components/Shop/Shop';
import Compare from '../components/compare/Compare';
import Account from '../components/Account/Account';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (

    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home1') {
              iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
            } else if (route.name === 'Compare') {
              iconName = focused ? 'md-git-compare-sharp' : 'md-git-compare-outline';
            }else if (route.name === 'Shop') {
                iconName = focused ? 'cart-sharp' : 'cart-outline';
              }else if (route.name === 'Search') {
                iconName = focused ? 'search-sharp' : 'search-outline';
              }else if (route.name === 'News') {
                iconName = focused ? 'settings-sharp' : 'settings-outline';
              }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={27} color={color} />;
          },
          headerShown: false,
          tabBarShowLabel:false,
          tabBarActiveTintColor: '#FF3939',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home1" component={Home} />
        <Tab.Screen name="Compare" component={Compare} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="News" component={Account} />
      </Tab.Navigator>
  )
}

