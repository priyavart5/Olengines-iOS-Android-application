import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import { featured_car } from '../../Data_Shown';
import {  Ionicons } from '@expo/vector-icons';
import {publicRequest} from '../../Axios_call';
import { useNavigation } from '@react-navigation/native';

export default function Featured_cars(){

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <Item car_name={item.car_name} image={item.image} logo={item.logo} />
      );

    const Item = ({ car_name, logo, image }) => (
        <View style={styles_home.s4_carCard}>
        <Image style={styles_home.s4_logo} source={logo} />
        <Image style={styles_home.s4_car} source={image} />
        <View style={styles_home.s4_name_arrow}>
            <Text style={styles_home.s4_carName}>{car_name}</Text>
            <Ionicons style={styles_home.s4_arrow} name="arrow-forward-circle" size={40} color="black" onPress={() => {
            publicRequest.get(`/car?q=${car_name}`)
            .then((response)=>{navigation.navigate('Car', {
                car_info: response.data.success[0]});
                // console.log(response.data.success); 
            })
            .catch(error=>{console.log(error)})}} />
        </View>
        </View>
      );
    return (
        <>
        <ScrollView style={{marginTop:70}}>
            <Ionicons name="arrow-back-circle" size={40} color="black" onPress={()=> navigation.navigate('Home1')}/>
            <Text>Its featured page</Text>
            <View style={styles_home.home_section04}>
                <View> 
                    {featured_car && (
                    <FlatList
                    style={styles_home.flatlist_main}
                        data={featured_car}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        vertical
                    />
                    )}
                </View>
            </View>
        </ScrollView>
        </>
    );
}


// 9987722648

export const Featured_car_home = () => {

    const navigation = useNavigation(); 


    const renderItem = ({ item }) => (
        <Item car_name={item.car_name} image={item.image} logo={item.logo} />
      );

    const Item = ({ car_name, logo, image }) => (
        <View style={styles_home.s4_carCard}>
        <Image style={styles_home.s4_logo} source={logo} />
        <Image style={styles_home.s4_car} source={image} />
        <View style={styles_home.s4_name_arrow}>
            <Text style={styles_home.s4_carName}>{car_name}</Text>
            <Ionicons style={styles_home.s4_arrow} name="arrow-forward-circle" size={40} color="black" onPress={() => {
                // make change here
            publicRequest.get(`/car?q=${car_name}`)   
            .then((response)=>{navigation.navigate('Car', {
                car_info: response.data.success[0]});
                // console.log(response.data.success); 
            })
            .catch(error=>{console.log(error)})}} />
            
        </View>
        </View>
      );

    return(
        <View style={styles_home.home_section04}>
            <View style={styles_home.s4_view}>
                <Text style={styles_home.s4_head}>Featured Cars.</Text>
                <Text style={styles_home.s4_viewall} onPress={() => navigation.navigate('Featured_cars')}>View all</Text>
            </View>
            <View> 
                {featured_car && (
                <FlatList
                    data={featured_car}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
                )}
            </View>
    </View>
    );
} 

const styles_home = StyleSheet.create({
    home_section04:{
        // backgroundColor:'grey',
        marginTop:50
    },
    flatlist_main: {
        marginLeft:12,
        width:'100%',
        flexDirection: 'row',
        backgroundColor: '#000'
    },
    s4_view:{
        flexDirection: 'row',
    },
    s4_head:{
        fontSize:20,
        width:'80%',
        color:'#FF3939'
    },
    s4_viewall:{
        width:'20%',
        textAlign:'right',
        marginTop:4,
        fontSize:12
    },
    s4_carCard:{
        width:170,
        height:180,
        marginRight :10,
        marginTop:15,
        backgroundColor:'#fff',
        borderRadius: 15,
        borderColor:'#E2E2E2',
        borderWidth: 1
    },
    s4_logo:{
        marginTop:20,
        marginLeft:20
    },
    s4_car: {
        marginTop:10
    },
    s4_name_arrow:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:"grey"
    },
    s4_carName: {
        fontSize:23,
        color:'#2C2C2C',
        marginLeft:15,
        width: '60%'
    },
    s4_arrow:{
        width:'25%',
    },
})