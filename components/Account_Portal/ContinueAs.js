import React from 'react';
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native';
import ContinueAs_Image from '../../Stuff/Images/Account_Portal/ContinueAs.png';
import { useNavigation } from '@react-navigation/native';


const ContinueAs = () => {

    const { width } = useWindowDimensions();
    const navigation = useNavigation(); 


    return (
        <>
        <ScrollView style={styles.ContinueAs}>
            <View >
                <View style={styles.signup_continueas}> 
                    <Text style={styles.signup_continueas_text}>Sign up</Text>
                </View>
                <Image source={ContinueAs_Image} style={[styles.image, { width, resizeMode: 'contain' }]} />
                <View>
                    <Text style={styles.continueas_text}>Continue As </Text>
                    <View style={styles.buttons_continueas}>
                        <View style={styles.button_google}><Text style={styles.google_continueas}> Google </Text></View>
                        <Text style={styles.apple_continueas}>Apple </Text>
                        <Text style={styles.Email_continueas} onPress={() =>navigation.navigate('Signin')}>Email </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    ContinueAs : {
        flex: 1,
        backgroundColor: '#000000'
    },
    signup_continueas:{
        position: 'absolute',
        color: '#fff'
    },
    image : {
        opacity: 0.7,
    },
    continueas_text : {
        color : '#fff',
        fontSize: 20,
        marginLeft: 35
    },
    buttons_continueas : {
        flex: 1,
        alignItems : 'center',
    },
    button_google : {
        marginTop:17,
        width: 305,
        height:45,
        backgroundColor: '#fff',
        borderRadius:  24
    },
    google_continueas: {
        color: '#000',
        textAlign: 'center',
        paddingTop:11,
        fontSize: 18,
        fontWeight: '400',
    },
    apple_continueas: {
        marginTop:17,
        color: '#fff',
        textAlign: 'center',
        paddingTop:9,
        fontSize: 18,
        fontWeight: '400',
        width: 305,
        height:45,
        borderWidth:1,
        borderColor: '#fff',
        borderRadius: 24
    },
    Email_continueas: {
        marginTop:17,
        color: '#fff',
        textAlign: 'center',
        paddingTop:10,
        fontSize: 18,
        fontWeight: '400',
        width: 305,
        height:45,
        borderWidth:1,
        borderColor: '#fff',
        borderRadius: 24
    }
})

export default ContinueAs;