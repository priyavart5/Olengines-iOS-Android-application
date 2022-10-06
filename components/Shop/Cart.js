import { View, Text , StyleSheet, ScrollView, Image, FlatList, useWindowDimensions, Alert } from 'react-native'
import React from 'react';
import { Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {publicRequest} from '../../Axios_call';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = ({route}) => {

    const navigation = useNavigation(); 
    const {width} = useWindowDimensions();

    const userCart_data = route.params;
    
    async function remove_item(item_id){
      const user_id = await AsyncStorage.getItem('id');
      publicRequest.get(`/carts/remove/item?item_id=${item_id}&user_id=${user_id}`)
            .then((res) => {
              if(res.data.success) {
              }
            }).catch((err) => {
              console.log(err)
            })
          };
        
    const makePayment =() => {
      Alert.alert("Order has been placed")
    }

  return (
    <>
    <View style={styles.cart}>
      <View style={styles.v01}>
        <View style={styles.v01_header}>
            <Ionicons style={styles.v01_iconBack} name="arrow-back-circle" size={36} color="#FF3939" onPress={() => {navigation.navigate('TabNavigation')}} />
            <Text style={styles.v01_title}>Shop</Text>
        </View>
      </View>

      <ScrollView style={styles.cart_scrollView}>
          <View style={styles.cart_page}>
              {userCart_data.user_cart.map((product) => (
                  <View style={styles.item_info}>
                    <View style={styles.item_image} >
                      <Image source={{ uri : product.item_image}} style={[styles.car_image, { resizeMode: 'contain' }]} />
                    </View>
                    <View style={styles.item_des}>
                        <Text  style={styles.item_name}>{product.item_name}</Text>
                        <Text  style={styles.item_price}>{product.item_price}</Text>
                        <View style={styles.quantity_adjust}>
                          <Text style={styles.quantity_number}>Delete</Text>
                          <MaterialIcons onPress={() => remove_item(product._id)} style={styles.delete_item} name="delete" size={24} color="black" />
                        </View>
                    </View>
                  </View>
              ))}
          </View>
      </ScrollView>
      <View style={styles.placedOrder}>
        <Text style={styles.placedOrder_text} onPress={() => navigation.navigate('UserDetail')}>Place Order</Text>
        <Ionicons style={styles.placedOrder_arrow} name="arrow-forward-circle" size={40} color="white" onPress={() => navigation.navigate('PlaceOrder')}/>
      </View>
    </View>
    </>
  )
};

export default Cart;

const styles = StyleSheet.create({
    v01:{
        marginTop: 60,
        borderBottomColor: 'gray',
        borderBottomWidth:0.2,
        backgroundColor:'#fff'
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
      cart:{
        backgroundColor:'#fff',
        height:'100%',
      },
      cart_page:{
        width: '90%',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#fff'
      },
      item_info:{
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius:10, 
        width: '100%',
        flexDirection: 'row',
        marginTop:20
      },
      item_image:{
        width: '50%',
      },
      car_image:{
        width: 130,
        height:120,
        marginLeft: 10,
        textAlign: 'center',
      },
      item_des: {
        width: '50%',
        marginTop:10,
        marginBottom: 10,
      },
      item_name:{
        fontSize:17,
        fontWeight: '500',
      },
      item_price:{
        marginTop:5,
        fontSize:15,
        fontWeight: '400',
      },
      quantity_adjust:{
        flexDirection: 'row',
        marginTop:20,
        width: '100%',
        justifyContent: 'space-evenly'
      },
      quantity_number:{
        fontSize:18,
      },
      delete_item:{
        marginLeft:20,
      },
      placedOrder:{
        width: '90%',
        alignItems: 'center',
        height: '10%',
        backgroundColor: '#FF3939',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        marginLeft: 20,
        borderRadius:20,
        marginBottom:20

      },
      placedOrder_text:{
        fontSize:25,
        color: '#fff'
      },
})