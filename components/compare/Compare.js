import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, TextInput, Image, Text,useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {publicRequest} from '../../Axios_call';
import { Ionicons, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';


const Compare = ({error}) => {

  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  const [text01, setText01] = useState('');
  const [car_search01, setCar01] = useState('');

  const [text02, setText02] = useState('');
  const [car_search02, setCar02] = useState('');

  const compareResult = () => {
    publicRequest.get(`/compare01?q=${text01}`)
        .then((response)=> { const cars01  = response.data.success[0]; 
            setCar01(cars01);}
            )
        .catch(error =>{ console.log('error 01', error.message) } )
    publicRequest.get(`/compare02?q=${text02}`)
        .then((response)=> { const cars02  = response.data.success[0]; 
            setCar02(cars02);}
            )
            .catch(error =>{ console.log('error 02', error.message) } )
  }

    return(

      <>
            <View style={styles.v01}>
              <View style={styles.v01_header}>
                {/* <Ionicons style={styles.v01_iconBack} name="arrow-back-circle" size={36} color="#FF3939" onPress={() => {navigation.navigate('Home1')}} /> */}
                <Text style={styles.v01_title}>Compare</Text>
              </View>
            </View>
          

        <ScrollView style={styles.compare}>
          <View style={styles.compare_inner}>
            <View style={styles.compare_fields}>
              <TextInput style={styles.compare_bar01}
                  placeholder = "Car 01"
                  placeholderTextColor = "#9C9C9C"
                  autoCapitalize = "words"
                  defaultValue={text01}
                  onChangeText={(value) => setText01(value)}
                  returnKeyType = "go"
                  onSubmitEditing = {
                      () => {
                        publicRequest.get(`/compare01?q=${text01}`)
                      .then((response)=> { const cars01  = response.data.success[0]; 
                          setCar01(cars01);}
                          )
                      .catch(error =>{ console.log('error 03', error.message) } )
                      }
                  }                
                  />
                  <Ionicons style={styles.compare_icon_field} name="git-compare-outline" size={24} color="black" />
                  <TextInput style={styles.compare_bar02}
                  placeholder = "Car 02"
                  placeholderTextColor = "#9C9C9C"
                  autoCapitalize='words'
                  defaultValue={text02}
                  onChangeText={(value) => setText02(value)}
                  returnKeyType = "go"
                  onSubmitEditing = {
                    () => {
                      publicRequest.get(`/compare02?q=${text02}`)
                      .then((response)=> { const cars02  = response.data.success[0]; 
                          setCar02(cars02);}
                          )
                      // .catch(console.log("Enter Second Car to compare"))
                      .catch(error =>{ console.log('error 04', error.message) } )
                    }
                }
                  />
            </View>
            <View style={styles.signin_continue_email}>
                <Text style={styles.signin_continue_email_text} onPress={compareResult} returnKeyType="go" >Compare</Text>
            </View>  
            <ScrollView style={styles.scrollCar01}
            showsHorizontalScrollIndicator={false} 
            horizontal={true} 
            overScrollMode='always'
            bouncesZoom={true} >
              <View style={styles.scrollView}>
                <Image source={{uri : car_search01.car_img}} />
                <Image 
                source={{uri: car_search01.car_img}}
                style={[styles.image, { width, resizeMode: 'contain' }]}
                />
                <View style={styles.textField}>
                  <Text style={styles.car_company}>{car_search01.car_company}</Text>
                  <Text style={styles.car_name}>{car_search01.car_name}</Text>
                </View>

                <View style={styles.v5}>
                  <View style={styles.v5_02}>
                    <View style={styles.v5_02_seat}>
                      <MaterialCommunityIcons name="car-seat" size={24} color="white" />
                      <Text style={styles.v5_02_text}>{car_search01.car_seatingCapacity}</Text>
                    </View>
                    <View style={styles.v5_02_fuel}>
                      <MaterialCommunityIcons name="engine-outline" size={24} color="white" />
                      <Text style={styles.v5_02_text}>{car_search01.car_fueltype}</Text>
                    </View>
                  </View>
                  <View style={styles.v5_03}>
                    <View style={styles.v5_03_fuel}>
                      <FontAwesome5 name="gas-pump" size={24} color="white" />
                    <Text style={styles.v5_02_text}>{car_search01.car_engine}</Text>
                  </View>
                    <View style={styles.v5_03_seat2}>
                      <MaterialCommunityIcons name="car-seat" size={24} color="white" />
                      <Text style={styles.v5_02_text}>{car_search01.car_seatingCapacity}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>

            <ScrollView style={styles.scrollCar01}
            showsHorizontalScrollIndicator={false} 
            horizontal={true} 
            overScrollMode='always'>
            <View style={styles.scrollView}>
              <Image source={{uri : car_search02.car_img}} />
              <Image 
              source={{uri: car_search02.car_img}}
              style={[styles.image, { width, resizeMode: 'contain' }]}
              />
              <View style={styles.textField}>
                <Text style={styles.car_company}>{car_search02.car_company}</Text>
                <Text style={styles.car_name}>{car_search02.car_name}</Text>
              </View>

              <View style={styles.v5}>
                  <View style={styles.v5_02}>
                    <View style={styles.v5_02_seat}>
                      <MaterialCommunityIcons name="car-seat" size={24} color="white" />
                      <Text style={styles.v5_02_text}>{car_search02.car_seatingCapacity}</Text>
                    </View>
                    <View style={styles.v5_02_fuel}>
                      <MaterialCommunityIcons name="engine-outline" size={24} color="white" />
                      <Text style={styles.v5_02_text}>{car_search02.car_fueltype}</Text>
                    </View>
                  </View>
                  <View style={styles.v5_03}>
                    <View style={styles.v5_03_fuel}>
                      <FontAwesome5 name="gas-pump" size={24} color="white" />
                    <Text style={styles.v5_02_text}>{car_search02.car_engine}</Text>
                  </View>
                    <View style={styles.v5_03_seat2}>
                      <MaterialCommunityIcons name="car-seat" size={24} color="white" />
                      <Text style={styles.v5_02_text}>{car_search02.car_seatingCapacity}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        </>
    );
};

export default Compare;

const styles = StyleSheet.create({
  compare : {
      backgroundColor: '#fff',
      height: '100%',
      width: '100%',
  },v01:{
    borderBottomColor: 'gray',
    borderBottomWidth:0.2,
    backgroundColor:'#fff',
  },
  v01_header:{
    marginTop: 60,
    // marginLeft:20,
    // marginRight:20,
    // flexDirection: 'row',
    alignItems: 'center',
    marginBottom:5,
    backgroundColor:'#fff',
  },
  v01_iconBack:{
    width:'11%',
    textAlign: 'right',
  },
  v01_title:{
    width:'78%',
    textAlign: 'center',
    fontSize:20,
    marginBottom:10,
  },
  compare_inner:{
    marginLeft:20,
    marginRight:20,
    marginTop:20
  },
  compare_fields:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  compare_bar01:{
    borderWidth:1,
    borderRadius:5,
    padding:10, 
    width:'44%',
    borderColor: '#FF3939',
    fontSize:18,
    textAlign: 'center'
  },
  compare_icon_field:{
    marginLeft:10,
    marginRight:10,
    color: '#FF3939'
  },
  compare_bar02:{
    borderWidth:1,
    borderRadius:5,
    padding:10, 
    width:'44%',
    borderColor: '#FF3939',
    fontSize:18,
    textAlign: 'center'
  },
  signin_continue_email:{
    backgroundColor: '#FF3939',
    width: '35%',
    height: 36,
    color: '#fff',
    paddingTop: 5,
    borderRadius: 50,
    left:'66%',
    marginTop: 15,
  },
  signin_continue_email_text:{
      color: '#fff',
      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center',
  },
  scrollCar01:{
    marginTop:20,
    width: '110%',
    height: '41%',
    borderWidth:0.2,
    borderRadius:10,
    padding:10,
    paddingLeft:0,
  },
  image: {
    width: 200,
    height: 200
  },
  scrollView:{
    flexDirection: 'row',
    marginRight:50
  },
  textField:{
    justifyContent: 'center',
  },
  car_company: {
    fontSize:20,
  },
  car_name: {
    color:"#FF3939",
    fontSize:40
  },
  car_price:{
    fontSize:16
  },
  v5:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:30,
    marginLeft:30
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
    marginLeft:10
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