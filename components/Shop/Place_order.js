import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons} from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import Payment from '../Payment/payment.html';


const Place_order = ()  =>{

  const navigation = useNavigation(); 
  return (
    <>
     <View style={styles.v01}>
        <View style={styles.v01_header}>
          <Ionicons style={styles.v01_iconBack} name="arrow-back-circle" size={36} color="#FF3939" onPress={() => {navigation.navigate('Shop')}} />
          <Text style={styles.v01_title}>Payment</Text>
        </View>
      </View>
    <WebView source={Payment} style={{flex : 1}} />
    </>
  )
}

export default Place_order;

const styles = StyleSheet.create({
  v01:{
    borderBottomColor: 'gray',
    borderBottomWidth:0.2,
    backgroundColor:'#fff',
  },
  v01_header:{
    marginTop: 60,
    marginLeft:20,
    marginRight:20,
    flexDirection: 'row',
    marginBottom:5,
    backgroundColor:'#fff',
  },
  v01_iconBack:{
    width:'11%',
  },
  v01_title:{
    width:'78%',
    textAlign: 'center',
    fontSize:22,
    marginTop:5,
  },
})