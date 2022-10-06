import { StyleSheet, Text, View , ScrollView, TextInput, Image, FlatList,useWindowDimensions} from 'react-native'
import React, {useState} from 'react';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { product } from '../../../Data_Shown';
import {publicRequest} from '../../../Axios_call';

const Product_shopHome = () => {

    const navigation = useNavigation();
    const { width } = useWindowDimensions();

    const renderItem = ({ item }) => (
        <Item item_name={item.item_name} item_image={item.item_image} item_price={item.item_price} />
    );


    const Item = ({ item_name, item_image, item_price }) => (
        <View style={styles.s4_carCard}>
            <Ionicons style={styles.save_heart_item} name="heart-outline" size={26} color="#FF3939" onPress={() => {navigation.navigate('')}} />
            <Image style={[styles.s4_car, { width, resizeMode: 'contain' }]} source={item_image} />
            <View>
            <View style={styles.s4_name_arrow}>
                <Text style={styles.s4_itemName} onPress={() =>  
                publicRequest.get(`/products/product_item?q=${item_name}`)
                .then((response)=>{navigation.navigate('Productpage', {
                    product_info: response.data.success[0]});
                })
                .catch(error=>{console.log(error)})}>{item_name}</Text>
                <Text style={styles.s4_itemPrice} onPress={() =>  
                publicRequest.get(`/products/product_item?q=${item_name}`)
                .then((response)=>{navigation.navigate('Productpage', {
                    product_info: response.data.success[0]});
                })
                .catch(error=>{console.log(error)})}>{item_price}</Text>
            </View>
            </View>
        </View>
        );


  return (
      <>
      <View style={[styles.flatlist_item]}> 
            {product && (
            <FlatList 
                numColumns={2}
                data={product}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
            )}
      </View>
      </>
  );
}

export default Product_shopHome;

const styles = StyleSheet.create({
    flatlist_item:{
        marginTop:20,
        marginLeft:20,
        marginRight:20,
      },
    
      s4_carCard:{
          width:162,
          height:180,
          marginRight :10,
          marginTop:15,
          backgroundColor:'#fff',
          borderRadius: 15,
          borderColor:'#E2E2E2',
          borderWidth: 1
      },
      save_heart_item:{
        position:'absolute',
        zIndex:10,
        right:7,
        top:7
      },
      s4_car: {
          marginTop:20,
          left:-110,
          right:10,
          width: 130,
          height:85,
      },
      s4_itemName: {
          fontSize:16,
          color:'#2C2C2C',
          marginTop:25,
          marginLeft:15,
          textAlign: 'left',
          fontWeight:'500',
      },
      s4_itemPrice: {
        fontSize:12,
        color:'#2C2C2C',
        marginTop:5,
        marginLeft:15,
        textAlign: 'left'
    },
      s4_arrow:{
          width:'25%',
      },
})