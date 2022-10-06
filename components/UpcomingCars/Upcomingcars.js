import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function Upcomingcars() {

  const navigation = useNavigation();
  return (
    <View style={{marginTop:50}}>
      <Text>Upcomingcars</Text>
      <Ionicons name="arrow-back-circle" size={40} color="black" onPress={()=> navigation.navigate('TabNavigation')}/>

    </View>
  )
}

const styles = StyleSheet.create({})