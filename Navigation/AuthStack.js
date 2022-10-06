import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Onboarding from '../components/Onboarding/Onboarding';
import ContinueAs from '../components/Account_Portal/ContinueAs';
import Signin from '../components/Account_Portal/Login/Signin.js';
import Signup from '../components/Account_Portal/Signup/Signup';
import Home from '../components/Home/Home';
import Search from '../components/Search/Search';
import TabNavigator from '../Navigation/TabNavigator';
import Car from '../components/cars/Car'
import Featured_cars from '../components/Car_Components/Featured_cars';
import Compare from '../components/compare/Compare';
import Latestcars from '../components/LatestCars/Latestcars'
import Upcomingcars from '../components/UpcomingCars/Upcomingcars';
import Product_page from '../components/Shop/Products_shopHome/Product_page';
import Cart from '../components/Shop/Cart';
import PlaceOrder from '../components/Shop/Place_order';
// import BottomSheet from '../Navigation/BottomSheet';
import UserDetail from '../components/Account_Portal/UserDetail';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }}/>
        <Stack.Screen name="Continueas" component={ContinueAs} options={{ headerShown: false }}/>
        <Stack.Screen name="TabNavigation" component={TabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
        <Stack.Screen name="Car" component={Car} options={{ headerShown: false }}/>
        <Stack.Screen name="Featured_cars" component={Featured_cars} options={{ headerShown: false }}/>
        <Stack.Screen name="Compare" component={Compare} options={{ headerShown: false }}/>
        <Stack.Screen name="Latestcars" component={Latestcars} options={{ headerShown: false }}/>
        <Stack.Screen name="Upcomingcars" component={Upcomingcars} options={{ headerShown: false }}/>
        <Stack.Screen name="Productpage" component={Product_page} options={{ headerShown: false }}/>
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
        <Stack.Screen name="PlaceOrder" component={PlaceOrder} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="BottomSheet" component={BottomSheet} options={{ headerShown: false }}/> */}
        <Stack.Screen name="UserDetail" component={UserDetail} options={{ headerShown: false }}/>
    </Stack.Navigator>
    </>
  )
}

export const StackNavigatorLogedIn = () => {
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen name="TabNavigation" component={TabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
        <Stack.Screen name="Car" component={Car} options={{ headerShown: false }}/>
        <Stack.Screen name="Featured_cars" component={Featured_cars} options={{ headerShown: false }}/>
        <Stack.Screen name="Compare" component={Compare} options={{ headerShown: false }}/>
        <Stack.Screen name="Latestcars" component={Latestcars} options={{ headerShown: false }}/>
        <Stack.Screen name="Upcomingcars" component={Upcomingcars} options={{ headerShown: false }}/>
        <Stack.Screen name="Productpage" component={Product_page} options={{ headerShown: false }}/>
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
        <Stack.Screen name="PlaceOrder" component={PlaceOrder} options={{ headerShown: false }}/>
        <Stack.Screen name="Continueas" component={ContinueAs} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="BottomSheet" component={BottomSheet} options={{ headerShown: false }}/> */}
        <Stack.Screen name="UserDetail" component={UserDetail} options={{ headerShown: false }}/>
    </Stack.Navigator>
    </>
  )
}


const AuthStack =  () => {


  const accessKey = async() => {
   const id = await AsyncStorage.getItem('id');}

  return accessKey() ? <StackNavigator />  :<StackNavigatorLogedIn />   ;
};

export default AuthStack;
