import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react';
import {Ionicons} from '@expo/vector-icons';
// import { useSelector } from "react-redux";
// import { Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {publicRequest} from '../../Axios_call'
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export const Header_shop = () => {
 
    const navigation = useNavigation(); 
    const [count, setCount] = useState(0);

    const handleCart = async () => {
      const getData_cart = async () => {
        try {
          const id = await AsyncStorage.getItem('id');
          //console.log(id)
          if(id !== null) {
            var data
            publicRequest.get(`/user?q=${id}`)
            .then((res) => {
              navigation.navigate('Cart', {user_cart : res.data.success});
              data= res.data.success;
              //console.log(data)
            })
          };
        }catch(e) {
          console.log(e, "error at catch")
        }
      };
      getData_cart();
    }
    // console.log(quantity)
    // console.log(cart)
  return (
      <>
        <View style={styles.v01}>
            <View style={styles.v01_header}>
                <Ionicons style={styles.v01_iconBack} name="heart-outline" size={36} color="#FF3939" onPress={() => {navigation.navigate('')}} />
                <Text style={styles.v01_title}>Shop</Text>
                <Ionicons style={styles.v01_iconCart} name="cart-outline" size={36} color="#FF3939" onPress={handleCart}>
                    {/* <Badge size={26} color="000000">{length_count}</Badge> */}
                </Ionicons>
            </View>
        </View>
    </>
  )
};


const styles = StyleSheet.create({
    v01:{
        marginTop: 60,
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
})