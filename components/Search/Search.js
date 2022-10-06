import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, TextInput, Image, useWindowDimensions, Text, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Search_image from '../../Stuff/Images/Search_image/search_image.png';
import { EvilIcons } from '@expo/vector-icons';
import {publicRequest} from '../../Axios_call';



const Search = () => {

    const navigation = useNavigation();
    const {width} = useWindowDimensions();
    const [text, setText] = useState('');
    const [car_search, setCar] = useState('');

    return(
        <>
        <ScrollView style={styles.search}>
            <View style={styles.search_fields}>
                <View style={styles.search_bar_icon}>
                <EvilIcons style={styles.search_icon} name="search" size={30} color="black" />
                <TextInput style={styles.search_bar}
                placeholder = "type to search car"
                placeholderTextColor = "#9C9C9C"
                autoCapitalize='words'
                clearButtonMode="always"
                defaultValue={text}
                onChangeText={(value) => setText(value)}
                returnKeyType = "go"
                onSubmitEditing = {() => {
                    publicRequest.get(`/search?q=${text}`)
                    .then((response)=> { const cars  = response.data.success[0]; 
                        setCar(cars)}
                        )
                    .catch(()=>{Alert.alert("Type something")})
                }
                }
                />
                </View>
            </View>
                  <View style={styles.item_info}>
                    <View style={styles.item_image} >
                      <Image source={{ uri : car_search.car_img}} style={[styles.car_image, { resizeMode: 'contain' }]} />
                    </View>
                    <View style={styles.item_des}>
                        <Text  style={styles.item_name}>{car_search.car_name}</Text>
                        <Text  style={styles.item_price}>{car_search.car_price}</Text>
                    </View>
                  </View>
            {/* <Text>{car_search.car_company}</Text>
            <Text>{car_search.car_price}</Text> */}
            <Image source={Search_image} style={[styles.image, { width, resizeMode: 'contain' }]} />
        </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    search : {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
    },
    search_fields: {
        flexDirection: 'row',
        marginTop:49,
        marginLeft: 20,
        marginRight: 20
    },
    search_bar_icon:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#9C9C9C',
        borderRadius: 28,
        height: 41,
        marginTop:5,
        width: '100%'
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
})

export default Search;