import { StyleSheet, Text, View, ScrollView, Image , useWindowDimensions} from 'react-native'
import React, {useState, useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Circles from '../../../Stuff/Images/cars/circles.png';
import {Header_shop} from '../Header_shop';
import {publicRequest} from '../../../Axios_call';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {cart_length} from '../Header_shop'

export default function Product({route}) {

  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  const item_data = route.params;

  const getData = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      console.log(id)
      if(id !== null) {
        publicRequest.post(`/cart_item?q=${id}`,{itemid : item_data.product_info._id}).then(res=>{
          console.log(res.data.success);
          cart_length()
        })
      };
    }catch(e) {
      console.log(e)
    }
  }

  const handleClick =  () => {
    getData();
    
  };

  return (
    <>
     <Header_shop />

    <ScrollView style={styles.car_scrollview}>
      <View style={styles.rectangle}>
        <Image style={[styles.circle_image, { width, resizeMode: 'contain' }]} source={Circles} />
      </View>
      <View style={styles.view}>
        <View style={styles.v1}>
          <Ionicons style={styles.v1_arrow} name="arrow-back-circle" size={40} color="white" onPress={()=>navigation.navigate('TabNavigation')}/>
          {/* <Text style={styles.v1_car_company}>{item_data.product_info.item_company}</Text> */}
        </View>
        <View style={styles.v2} >
          <Image source={{ uri : item_data.product_info.item_image}} style={[styles.car_image, { resizeMode: 'contain' }]} />
        </View>
        <View style= {styles.v3}>
          <View style={styles.v3_field} >
            <Text style={styles.v3_car_name} >{item_data.product_info.item_name}</Text>
            <Text style={styles.v3_car_price} >{item_data.product_info.item_price}</Text>
            <Image source={{ uri : "https://user-images.githubusercontent.com/96736133/161508123-0965f7f7-c28d-4cbd-89ed-a4a949570adc.png"}}  style={[ styles.select_field, {resizeMode: 'contain' }]} />
          </View>
          <View style={styles.v3_colors}>
            <Image source={{uri : "https://user-images.githubusercontent.com/96736133/161487198-c37b2b21-ff73-4faa-9f4c-04384af4925b.png" }} style={[ styles.colors_circle, { width, resizeMode: 'contain' }]} />
            <Image source={{uri : "https://user-images.githubusercontent.com/96736133/161487296-15a4743f-0b87-4ed3-88d1-16763b937faf.png" }} style={[ styles.colors_circle, { width, resizeMode: 'contain' }]} />
            <Image source={{uri : "https://user-images.githubusercontent.com/96736133/161487331-e0c21a30-a471-435b-bc01-8f4a6498030f.png" }} style={[ styles.colors_circle, { width, resizeMode: 'contain' }]} />
            <Image source={{uri : "https://user-images.githubusercontent.com/96736133/161487380-53dd2eb2-51be-47d7-b6a9-44a45125ab71.png" }} style={[ styles.colors_circle, { width, resizeMode: 'contain' }]} />
          </View>
        </View>
        <View style={styles.placedOrder}>
          <Text style={styles.placedOrder_text} onPress={handleClick}>Add to Cart</Text>
          <Ionicons style={styles.placedOrder_arrow} name="cart-outline" size={27} color="white" onPress={handleClick}/>
        </View>
      </View>

    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  car_scrollview : {
    flex : 1,
    backgroundColor: '#fff',
  },

  v01:{
    borderBottomColor: 'gray',
    borderBottomWidth:0.2,
  },
  v01_header:{
    marginLeft:20,
    marginRight:20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:5
  },
  v01_iconBack:{
    width:'11%',
    textAlign: 'right',

  },
  v01_title:{
    width:'78%',
    textAlign: 'center',
    fontSize:20
  },
  v01_iconCart:{
    width:'11%',
  },

  view:{
    marginTop:20,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
  },
  rectangle: {
    position: 'absolute',
    width: 375,
    height: 305,
    backgroundColor: '#FB574E',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  circle_image : {
    width:200,
    height:200,
    marginLeft:90
  },
  v1:{
    flexDirection: 'row',
    alignItems:'center',
  },
  v1_car_company:{
    fontSize:36,
    marginLeft:5,
    color: '#fff'
  },
  car_image:{
    width: 340,
    height:220,
    marginLeft:-10,
    marginTop: 55
  },
  v3:{
    marginTop:30,
    flexDirection: 'row',
  },
  v3_field:{
    width:'90%',
    // backgroundColor: '#000'
  },
  select_field:{
    marginTop:18,
    width:250,
    height:52,
  },
  v3_colors:{
    width:'10%',
    justifyContent: 'center',
    alignItems:'center',
    marginTop:7,
  },
  colors_circle:{
    width:24,
    height:24,
    marginBottom:9
  },
  v3_car_name:{
    fontSize:38,
    color: '#000'
  },
  v5:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:30,
  },
  v5_features_image: {
    width: 180,
    height: 150,
  },
  v5_features_image_text:{
    fontSize:20,
    textAlign: 'center',
    marginTop:-15,
  },
  v5_01:{
    width: 170,
  },
  v5_02:{
    width: 72,
  },
  v5_02_seat:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5151',
    borderRadius:7,
    marginBottom:10,
    height:72
  },
  v5_03:{
    width: 70,
  },
  v5_02_fuel:{
  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5151',
    borderRadius:7,
    marginBottom:10,
    height:72
  },
  v5_03_engine:{
  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5151',
    borderRadius:7,
    height:72
  },
  v5_03_seat2:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5151',
    borderRadius:7,
    height:72
  },
  v5_03_fuel:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5151',
    borderRadius:7,
    height:72,
    marginBottom:10
  },
  v5_02_text:{
    color: '#fff',
    marginTop:5,
    fontWeight:'600'
  },
  placedOrder:{
    width: '74%',
    alignItems: 'center',
    height: '10%',
    backgroundColor: '#FF3939',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    borderRadius:10,
    marginBottom:20,
    marginTop:20

  },
  placedOrder_text:{
    fontSize:18,
    color: '#fff'
  },
})