import { StyleSheet, Text, View, ScrollView, Image , useWindowDimensions} from 'react-native'
import React, {useState} from 'react';
import { Ionicons , MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Features from '../../Stuff/Images/cars/features.png';
import Circles from '../../Stuff/Images/cars/circles.png';

export default function Car({route}) {

  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const car_data = route.params;

  return (
    <>
    <ScrollView style={styles.car_scrollview}>
      <View style={styles.rectangle}>
        <Image style={[styles.circle_image, { width, resizeMode: 'contain' }]} source={Circles} />
      </View>
      <View style={styles.view}>
        <View style={styles.v1}>
          <Ionicons style={styles.v1_arrow} name="arrow-back-circle" size={40} color="white" onPress={()=>navigation.navigate('TabNavigation')}/>
          <Text style={styles.v1_car_company}>{car_data.car_info.car_company}</Text>
        </View>
        <View style={styles.v2} >
          <Image source={{ uri : car_data.car_info.car_img}} style={[styles.car_image, { resizeMode: 'contain' }]} />
        </View>
        <View style= {styles.v3}>
          <View style={styles.v3_field} >
            <Text style={styles.v3_car_name}>{car_data.car_info.car_name}</Text>
            <Text style={styles.v3_car_price} >{car_data.car_info.car_price}</Text>
            <Image source={{ uri : "https://user-images.githubusercontent.com/96736133/161508123-0965f7f7-c28d-4cbd-89ed-a4a949570adc.png"}}  style={[ styles.select_field, {resizeMode: 'contain' }]} />
          </View>
          <View style={styles.v3_colors}>
            <Image source={{uri : "https://user-images.githubusercontent.com/96736133/161487198-c37b2b21-ff73-4faa-9f4c-04384af4925b.png" }} style={[ styles.colors_circle, { width, resizeMode: 'contain' }]} />
            <Image source={{uri : "https://user-images.githubusercontent.com/96736133/161487296-15a4743f-0b87-4ed3-88d1-16763b937faf.png" }} style={[ styles.colors_circle, { width, resizeMode: 'contain' }]} />
            <Image source={{uri : "https://user-images.githubusercontent.com/96736133/161487331-e0c21a30-a471-435b-bc01-8f4a6498030f.png" }} style={[ styles.colors_circle, { width, resizeMode: 'contain' }]} />
            <Image source={{uri : "https://user-images.githubusercontent.com/96736133/161487380-53dd2eb2-51be-47d7-b6a9-44a45125ab71.png" }} style={[ styles.colors_circle, { width, resizeMode: 'contain' }]} />
          </View>
        </View>
        <View style={styles.v5}>
          <View style={styles.v5_01}>
            <Image  style={[styles.v5_features_image, { resizeMode: 'contain' }]} source={Features} />
            <Text style={styles.v5_features_image_text}>All new features</Text>
          </View>
          <View style={styles.v5_02}>
            <View style={styles.v5_02_seat}>
              <MaterialCommunityIcons name="car-seat" size={24} color="white" />
              <Text style={styles.v5_02_text}>{car_data.car_info.car_seatingCapacity}</Text>
            </View>
            <View style={styles.v5_02_fuel}>
              <MaterialCommunityIcons name="engine-outline" size={24} color="white" />
              <Text style={styles.v5_02_text}>{car_data.car_info.car_fueltype}</Text>
            </View>
          </View>
          <View style={styles.v5_03}>
            <View style={styles.v5_03_fuel}>
              <FontAwesome5 name="gas-pump" size={24} color="white" />
            <Text style={styles.v5_02_text}>{car_data.car_info.car_engine}</Text>
          </View>
            <View style={styles.v5_03_seat2}>
              <MaterialCommunityIcons name="car-seat" size={24} color="white" />
              <Text style={styles.v5_02_text}>{car_data.car_info.car_seatingCapacity}</Text>
            </View>
          </View>
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
  view:{
    marginTop:60,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
  },
  rectangle: {
    position: 'absolute',
    width: '100%',
    height: 305,
    backgroundColor: '#FB574E',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  circle_image : {
    width:200,
    height:200,
    marginLeft:100
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
    marginTop: 38
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

})