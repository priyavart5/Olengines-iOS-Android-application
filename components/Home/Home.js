import React, {useState} from 'react';
import  {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import Banner from '../../Stuff/assets/Banner.png';
import {Featured_car_home} from '../Car_Components/Featured_cars';
import Latestcars from '../../Stuff/Images/Home/latestcars.png';
import Upcomingcars from '../../Stuff/Images/Home/upcomingcars.png';
import News from '../../Stuff/Images/Home/news.png';
// import BottomSheet from s'../../Navigation/BottomSheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

    const navigation = useNavigation();

    return(
        <>
        <ScrollView style={styles.Home} showsVerticalScrollIndicator={false}>
            <View style={styles.Sub_Home}>
                <View style={styles.home_section01}>
                    <Text style={styles.s1_text} >Olengines</Text>
                    <SimpleLineIcons style={styles.s1_icon} name="menu" size={27} color="black"  />
                </View>

                <View style={styles.home_section02}>
                    <Text style={styles.s2_text}>Welcome back</Text>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.home_section03} >
                    <Image  style={styles.s3_banner} source={Banner} />
                    <Image source={Banner} />
                    <Image source={Banner} />
                </ScrollView>
                
                <Featured_car_home />

                <View style={styles.home_section04}>
                    <TouchableOpacity  onPress={() => navigation.navigate('Compare')}>
                        <Image   style={styles.s4_latest} source={Latestcars} />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('Upcomingcars')}>
                        <Image   style={styles.s4_upcoming} source={Upcomingcars} />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('News')}>
                        <Image   style={styles.s4_news} source={News} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    Home:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    Sub_Home:{
        width: '90%',
        justifyContent: 'center',
        marginTop: 60,
        marginLeft: 20,
        marginRight: 20,
    },
    home_section01: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    s1_text:{
        width: '90%',
        color: '#000000',
        fontWeight: 'normal',
        fontSize : 30
    },
    s1_icon:{
        width: '10%',
        textAlign: 'right'
    },
    home_section02:{
        marginTop:10,
        marginBottom:10,
        height: 30,
        justifyContent: 'center',
        
    },
    s2_text:{
        fontSize:17,
        color: '#FF3939'
    },
    home_section03:{
        marginTop:20,
        width: '100%',
        height: 176
    },
    s3_banner:{
        marginRight:15,
    },
    s5_carCard:{
        marginLeft:8,
        width:170,
        height:170,
        backgroundColor:'#fff',
        borderRadius: 15,
        backgroundColor:'#2C2C2C'
    },
    home_section04:{
        marginTop:37,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    }
})

export default Home;







