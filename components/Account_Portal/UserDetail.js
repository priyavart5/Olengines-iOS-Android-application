import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {publicRequest} from '../../Axios_call';

const UserDetail = () => {

    const navigation = useNavigation(); 

    const userDetailFields = {
        address:'',
        state: '',
        country: '',
        pinCode: '',
        phoneNumber: ''
    }

    const [error] = useState('');

    const userDetailaddress = async (values, formikActions) => {
        const user_id = await AsyncStorage.getItem('id');
        const res = await publicRequest.post(`/userAddress?q=${user_id}`, {
          ...values,
        });
        navigation.navigate('PlaceOrder');
        console.log(res.data);
        formikActions.resetForm();
        formikActions.setSubmitting(false);
      };

  return (
    <>
        <View style={styles.v01}>
            <View style={styles.v01_header}>
                <Ionicons style={styles.v01_iconBack} name="arrow-back-circle" size={36} color="#FF3939" onPress={() => {navigation.navigate('Shop')}} />
                <Text style={styles.v01_title}>User Detail</Text>
            </View>
        </View>

        <ScrollView style={styles.UserDetailPage}>
        <View style={styles.signupwithemail}>
                    <Text style={styles.withemail_login}>Billing Address</Text>
                    <Formik initialValues={userDetailFields} onSubmit={userDetailaddress}>
                        {({values, handleChange, touched, handleSubmit, handleBlur, errors, isSubmitting, submitting, onPress}) => {


                            const { address, state, country, pinCode, phoneNumber } = values;
                            return <>
                            <TextInput style = {styles.email_input}
                            placeholder = "xyz residence"
                            placeholderTextColor = "#9C9C9C"
                            autoCapitalize = "none"
                            error ={touched.address || errors.address}
                            value = {address}
                            onChangeText={handleChange('address')}
                            onBlur={handleBlur('address')}
                            />
                            <View style = {styles.name_signup}>
                                <TextInput style = {styles.firstname_input}
                                placeholder = "State"
                                placeholderTextColor = "#9C9C9C"
                                autoCapitalize = "none"
                                value = {state}
                                onChangeText={handleChange('state')}
                                onBlur={handleBlur('state')}
                                error ={touched.state || errors.state}
                                />

                                <TextInput style = {styles.lastname_input}
                                placeholder = "Country"
                                placeholderTextColor = "#9C9C9C"
                                autoCapitalize = "none"
                                error ={touched.country && errors.country}                                
                                value = {country}
                                onChangeText={handleChange('country')}
                                onBlur={handleBlur('country')}
                                />
                            </View>
                            <TextInput style = {styles.email_input}
                            placeholder = '11••53'
                            placeholderTextColor = "#9C9C9C"
                            autoCapitalize = "none"
                            error ={touched.pinCode && errors.pinCode}
                            value={pinCode}
                            onChangeText={handleChange('pinCode')}
                            onBlur={handleBlur('pinCode')}
                            />
                            <TextInput style = {styles.email_input}
                            placeholder = '9971•••107'
                            placeholderTextColor = "#9C9C9C"
                            autoCapitalize = "none"
                            error ={touched.phoneNumber && errors.phoneNumber}
                            value={phoneNumber}
                            onChangeText={handleChange('phoneNumber')}
                            onBlur={handleBlur('phoneNumber')}
                            />

                            <View style={styles.placedOrder} onPress={!submitting ? onPress : null}>
                                <Text style={styles.placedOrder_text} submitting={isSubmitting} onPress={handleSubmit}>Place Order</Text>
                                <Ionicons style={styles.placedOrder_arrow} name="arrow-forward-circle" size={40} color="white" onPress={() => navigation.navigate('PlaceOrder')}/>
                            </View>
                            </>
                        }}
                    </Formik>
                </View>
        </ScrollView>
    </>
  )
}

export default UserDetail;

const styles = StyleSheet.create({
    v01:{
        borderBottomColor: 'gray',
        borderBottomWidth:0.2,
        backgroundColor:'#fff',
      },
      v01_header:{
        marginTop: 60,
        marginLeft:20,
        marginRight:20,
        flexDirection: 'row',
        marginBottom:5,
        backgroundColor:'#fff',
      },
      v01_iconBack:{
        width:'11%',
      },
      v01_title:{
        width:'78%',
        textAlign: 'center',
        fontSize:20,
        marginTop:7,
      },
      UserDetailPage:{
          backgroundColor:'#fff'
      },






      // Signup styles

    signupwithemail : {
        marginTop: 28,
        marginLeft: 25
    },
    withemail_login:{
        fontSize:18,
        marginBottom:20,
        color: '#FF3939'
    },
    email_input: {
        borderWidth: 1,
        borderColor: '#9C9C9C',
        width: 325,
        height: 45,
        borderRadius: 5,
        marginTop:'5%',
        paddingLeft: 18,
        fontSize: 14,
        letterSpacing: 0.7
    },
    error_email:{
        color: '#FF3939',
        fontSize: 16,
        textAlign:'right',
        marginRight : 30
    },
    name_signup: {
        flexDirection: 'row',
        marginTop:'5%'
    },
    firstname_input: {
        borderWidth: 1,
        borderColor: '#9C9C9C',
        width: 155,
        height: 45,
        borderRadius: 5,
        marginTop:5,
        paddingLeft: 18,
        fontSize: 14,
        letterSpacing: 0.7,
    },
    error_firstname:{
        color: '#FF3939',
        fontSize: 16,
        textAlign:'right',
        marginRight : 30,
        marginTop: 5,
    },
    error_password:{
        color: '#FF3939',
        fontSize: 16,
        textAlign:'right',
        marginRight : 30,
        marginTop: 5
    },
    error_confirmpassword:{
        color: '#FF3939',
        fontSize: 16,
        textAlign:'right',
        marginRight : 30,
        marginTop: 5
    },
    lastname_input: {
        borderWidth: 1,
        marginLeft: 15,
        borderColor: '#9C9C9C',
        width: 155,
        height: 45,
        borderRadius: 5,
        marginTop:5,
        paddingLeft: 18,
        fontSize: 14,
        letterSpacing: 0.7
    },
    signin_continue_email:{
        backgroundColor: '#FF3939',
        width: 100,
        height: 36,
        color: '#fff',
        paddingTop: 7,
        paddingLeft:14,
        borderRadius: 50,
        marginLeft: 225,
        marginTop: 25
    },
    signin_continue_email_text:{
        color: '#fff',
        fontSize: 18,
        fontWeight: '500'
    },

    signin_other:{
        flex: 1,
        alignItems:'flex-end',
        marginRight: 30,
        marginTop: 90,
    },
    signin_other_new: {
        fontSize: 13
    },
    signin_other_text :{
        marginBottom: 7
    },
    signin_other_createanaccount:{
        color: '#FF3939',
    },

    signin_bottom : {
        borderTopColor: '#9C9C9C',
        borderTopWidth: 0.6,
        width: 325,
        marginTop: 25,
        marginLeft: 25,
        marginBottom: 40
    },
    signup_bottom_line1: {
        marginTop:15,
        color: '#323232',
        fontSize: 12
    },signup_bottom_line2: {
        marginTop:10,
        color: '#323232',
        fontSize: 12
    },signup_bottom_line3: {
        marginTop:10,
        color: '#323232',
        fontSize: 12
    },
    signin_bottom_text:{
        marginTop:10,
        color: '#323232',
        fontSize: 12
    },
    signin_bottom_privacy:{
        color: '#FF3939',
        fontSize: 12
    },

    placedOrder:{
        width: '93%',
        alignItems: 'center',
        height: '12%',
        backgroundColor: '#FF3939',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        borderRadius:20,
        marginTop:'79%',
        marginBottom:20
      },
      placedOrder_text:{
        fontSize:25,
        color: '#fff'
      },

})
