import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createAppContainer} from 'react-navigation';

export default function DrawerNavigator() {

    const RootDrawerNavigation = createDrawerNavigator();

  return (
    <View>
      <Text>DrawerNavigator</Text>
    </View>
  )
}

const styles = StyleSheet.create({})