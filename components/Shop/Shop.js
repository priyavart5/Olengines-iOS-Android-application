import { StyleSheet, Text, View , ScrollView, TextInput, Image, FlatList,useWindowDimensions} from 'react-native'
import React, {useState} from 'react';
import { EvilIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Product_shopHome from './Products_shopHome/Product_shopHome';
import Banner from '../../Stuff/assets/Banner.png';
import {Header_shop} from './Header_shop';

const Shop = () => {

  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const [item, setItem] = useState('');
  const [item_search, setItem1] = useState('');

  

  return (
    <>
    <View style={styles.shop_page}>
      <Header_shop />
      <ScrollView>
        <View style={styles.shop}>
        <View style={styles.search_bar_icon}>
          <EvilIcons style={styles.search_icon} name="search" size={30} color="black" />
          <TextInput style={styles.search_bar}
          placeholder = "type to search item"
          placeholderTextColor = "#9C9C9C"
          autoCapitalize = "words"
          clearButtonMode="always"
          defaultValue={item}
          onChangeText={(value) => setItem(value)}
          returnKeyType = "go"
          onSubmitEditing = {() => {
              axios.get(`http://localhost:20003/searchProduct?q=${item}`)
              .then((response)=> { const items  = response.data.success; 
                  setItem1(items)}
                  )
              .catch(error=>{console.log(error)})
          }
          }
          />
        </View>
        <Text>{item_search.item_company}</Text>
        <Text>{item_search.item_price}</Text> 
        {/* <Image source={{item_image}} style={[styles.image, { width, resizeMode: 'contain' }]} />  */}

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.home_section03} >
            <Image style={styles.s3_banner} source={Banner} />
            <Image style={styles.s3_banner} source={Banner} />
            <Image style={styles.s3_banner} source={Banner} />
        </ScrollView>

        <Product_shopHome />

        </View>
    </ScrollView>
    </View>
    </>
  );
};

export default Shop;

const styles = StyleSheet.create({
  shop_page:{
    backgroundColor:'#fff'
  },
  shop:{
    flex:1,
    marginTop:15,
  },
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
  search_fields: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20
  },
  search_bar_icon:{
      marginLeft:20,
      marginRight:20,
      flexDirection: 'row',
      borderWidth: 0.2,
      borderColor: '#9C9C9C',
      borderRadius: 28,
      height: 41,
      marginTop:5,
      width: '89%'
  },
  search_icon:{
      marginTop:7,
      marginLeft:8
  },
  search_bar: {
      flexDirection: 'row',
      width: '85%',
      height: 41,
      paddingLeft: 18,
      fontSize: 14,
      letterSpacing: 0.7,
      // backgroundColor:'#FB7890'
  },

  home_section03:{
    // marginTop:,
    width: '100%',
    height: 176
  },
  s3_banner:{
      // marginRight:,
      marginLeft:20,
  }
})