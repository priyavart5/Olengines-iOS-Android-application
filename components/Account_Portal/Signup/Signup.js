import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import {publicRequest} from '../../../Axios_call';
import AsynxStorage from '@react-native-async-storage/async-storage';


const validationSchema = Yup.object({
    firstName: Yup.string().trim().min(3, 'Invalid name').required('Name is required'),
    email: Yup.string().email('Invalid email!').required('Email is required'),
    password: Yup.string().trim().min(8, 'Password is too short').required('Password is required'),
    confirmPassword: Yup.string().equals([Yup.ref('password'), null], 'Password does not match')
})


const Signup = () => {

    const navigation = useNavigation(); 

    const userInfo = {
        firstName:'',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [error] = useState('');

    const signUp = async (values, formikActions) => {
        const res = await publicRequest.post('/signup', {
          ...values,
        });
        if(res.data.success){
            const signInRes = await signInRes(values.email, values.password);
        }
        navigation.navigate('Signin');
        console.log(res.data);
        formikActions.resetForm();
        formikActions.setSubmitting(false);
      };

    return(
        <>
            <ScrollView style={styles.signup} vertically pagingEnabled showsVerticalScrollIndicator={true}>
            <Ionicons onPress={() =>navigation.navigate('Signin')} style={styles.backButton} name="arrow-back-circle" size={40} color="#FF3939" />
            <Text style={styles.olengines_login}>Olengines</Text>
                <View style={styles.signin_container}>
                    <Text style={styles.signin_login}>Sign up</Text>
                </View>
                <View style={styles.signupwithsocial}>
                    <Text style={styles.withemail_login}>Sign up with social</Text>
                    <View style={styles.button_google}><Text style={styles.google_continueas}> Google </Text></View>
                    <View style={styles.button_apple}><Text style={styles.apple_continueas}> Apple </Text></View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 28}}>
                    <View style={{ width: 140,flex: 1, height: 0.6, backgroundColor: '#666666' , marginLeft: 25}} />
                    <View>
                        <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
                    </View>
                    <View style={{width: 140, flex: 1, height: 0.6, backgroundColor: '#666666', marginRight: 25}} />
                </View>
                <View style={styles.signupwithemail}>
                    <Text style={styles.withemail_login}>Sign up with email</Text>
                    <Formik initialValues={userInfo} validationSchema = {validationSchema} onSubmit={signUp}>
                        {({values, handleChange, touched, handleSubmit, handleBlur, errors, isSubmitting, submitting, onPress}) => {


                            const { firstName, lastName, email, password,confirmPassword } = values;
                            return <>
                            {error ? null : <Text style={styles.error_email}>{errors.email}</Text>}
                            <TextInput style = {styles.email_input}
                            placeholder = "xyz@gmail.com"
                            placeholderTextColor = "#9C9C9C"
                            autoCapitalize = "none"
                            error ={touched.firstName || errors.email}
                            value = {email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            />
                            {error ? null : <Text style={styles.error_firstname}>{errors.firstName}</Text>} 
                            <View style = {styles.name_signup}>
                                <TextInput style = {styles.firstname_input}
                                placeholder = "First Name"
                                placeholderTextColor = "#9C9C9C"
                                autoCapitalize = "none"
                                value = {firstName}
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                error ={touched.firstName || errors.firstName}
                                />

                                <TextInput style = {styles.lastname_input}
                                placeholder = "Last Name"
                                placeholderTextColor = "#9C9C9C"
                                autoCapitalize = "none"
                                error ={touched.lastName && errors.lastName}                                
                                value = {lastName}
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                />
                            </View>

                            {error ? null : <Text style={styles.error_password}>{errors.password}</Text>}
                            <TextInput style = {styles.email_input}
                            placeholder = '••••••'
                            placeholderTextColor = "#9C9C9C"
                            autoCapitalize = "none"
                            secureTextEntry={true}
                            error ={touched.password && errors.password}
                            value={password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            />
                            {error ? null : <Text style={styles.error_confirmpassword}>{errors.confirmPassword}</Text>}
                            <TextInput style = {styles.email_input}
                            placeholder = '••••••'
                            placeholderTextColor = "#9C9C9C"
                            autoCapitalize = "none"
                            secureTextEntry={true}
                            error ={touched.confirmPassword && errors.confirmPassword}
                            value={confirmPassword}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            />
                            <TouchableOpacity style={styles.signin_continue_email} onPress={!submitting ? onPress : null} >
                                    <Text style={styles.signin_continue_email_text} submitting={isSubmitting} onPress={handleSubmit}>Continue</Text>
                            </TouchableOpacity>
                            </>
                        }}
                    </Formik>
                </View>
                    

                <View style={styles.signin_other}>
                    <Text style={styles.signin_other_new} onPress={() =>navigation.navigate('Signin')}>Already have an account?<Text style={styles.signin_other_createanaccount} onPress={() =>navigation.navigate('signin')}> Sign in</Text></Text>
                </View>

                <View style={styles.signin_bottom}>
                    <Text style={styles.signup_bottom_line1}>By clicking Create account, I agree that:</Text>
                    <Text style={styles.signup_bottom_line2}>● I have read and accepted the Terms of Use.</Text>
                    <Text style={styles.signup_bottom_line3}>● The Olengines family may keep me informed with personalized emails about products and services.</Text>
                    <Text style={styles.signin_bottom_text}>See our <Text style={styles.signin_bottom_privacy}>Privacy Policy</Text> for more details or to opt-out at any time.</Text>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    signup : {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
    },
    backButton:{
        position: 'absolute',
        marginTop: 55,
        marginLeft: 25
    },
    olengines_login : {
        fontSize:22,
        color: '#FF3939',
        position: 'absolute',
        marginTop:64,
        marginLeft: 90
    },
    signin_container : {
        marginTop: 120,
        marginLeft: 25
    },
    signin_login : {
        fontSize:50,
        color: '#323232',
    },
    signupwithsocial : {
        marginTop: 28,
        marginLeft: 25
    },
    withemail_login : {
        fontSize:15,
        color: '#323232',
    },
    button_google : {
        marginTop:14,
        width: 325,
        height:45,
        borderRadius:  24,
        borderColor: '#0066FE',
        borderWidth:1
    },
    google_continueas: {
        color: '#0066FE',
        textAlign: 'center',
        paddingTop:11,
        fontSize: 18,
        fontWeight: '400',
    },
    button_apple : {
        marginTop:14,
        width: 325,
        height:45,
        borderRadius:  24,
        backgroundColor: '#000'
    },
    apple_continueas: {
        color: '#fff',
        textAlign: 'center',
        paddingTop:11,
        fontSize: 18,
        fontWeight: '400',
    },
    signupwithemail : {
        marginTop: 28,
        marginLeft: 25
    },
    email_input: {
        borderWidth: 1,
        borderColor: '#9C9C9C',
        width: 325,
        height: 45,
        borderRadius: 5,
        marginTop:5,
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
    }
})

export default Signup;