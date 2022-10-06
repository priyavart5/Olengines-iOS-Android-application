import React, {createContext, useContext, useState} from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Formik} from 'formik';
import {publicRequest} from '../../../Axios_call';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Login  = () => {
    const navigation = useNavigation();



  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState('');


    const [userInfo, setUserInfo] = useState({
      email: '',
      password: '',
    });
  
    const [error, setError] = useState('');
  
    const { email, password } = userInfo;
  
    const handleOnChangeText = (value, fieldName) => {
      setUserInfo({ ...userInfo, [fieldName]: value });
    };

    const isValidObjField = obj => {
        return Object.values(obj).every(value => value.trim());
      };
      
    const updateError = (error, stateUpdater) => {
        stateUpdater(error);
        setTimeout(() => {
          stateUpdater('');
        }, 2500);
      };
      
    const isValidEmail = value => {
        const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return regx.test(value);
      };
  
    const isValidForm = () => {
      if (!isValidObjField(userInfo))
        return updateError('Required all fields!', setError);
      if (!isValidEmail(email)) return updateError('Invalid email!', setError);
      if (!password) return updateError('Invalid Password!', setError);
      return true;
    };

  
    const signInsubmit = async () => {
      if (isValidForm()) {
        try {
          publicRequest.post('/signin' || 'http://192.168.0.199:8081/signin',{ 
            email, 
            password
        }).then(
            res => {
                if(res.data.success){
                    const storeData = async (value) => {
                        try {
                          await AsyncStorage.setItem('key', res.data.success)
                          //console.log(res.data.user)
                          await AsyncStorage.setItem('id', res.data.user._id)
                        } catch (error) {
                          console.log(error)
                        }
                      }
                      storeData()
                      setUserInfo({ email: '', password: '' });
                      setProfile(res.data.user);
                      setIsLoggedIn(true);
                      navigation.navigate('TabNavigation');
                }
            }
        )
        ;  
        
        //   if (signInRes.data.success) {
    
        //   }
        //   console.log(signInRes.data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    return(
        <>
        <ScrollView>
                <View style={styles.login_page}>
                    <Ionicons onPress={() =>navigation.navigate('Continueas')} style={styles.backButton} name="arrow-back-circle" size={40} color="#FF3939" />
                <View style={styles.signin_container}>
                    <Text style={styles.signin_login}>Sign in</Text>
                    <Text style={styles.withemail_login}>With email</Text>
                </View>
                <View style={styles.signin_email}>
                    <Formik initialValues={userInfo} onSubmit={signInsubmit}>
                    {({errors, handleSubmit, touched}) => {
                        return <>
                            {error ? <Text style={styles.error_email}>{error}</Text> : null}
                            <TextInput style = {styles.email_input}
                            placeholder = "Email"
                            placeholderTextColor = "#2c2c2c"
                            autoCapitalize = "none"
                            keyboardType='email-address'
                            value={email}
                            onChangeText={value => handleOnChangeText(value, 'email')}
                            error ={touched.firstName && errors.email}
                            />
                            {error ? null : <Text style={styles.error_email}>{error}</Text>}
                            <TextInput style = {styles.password_input}
                            placeholder = "Password"
                            placeholderTextColor = "#2c2c2c"
                            autoCapitalize = "none"
                            icon="lock"
                            keyboardType='email-address'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={value => handleOnChangeText(value, 'password')}
                            error ={touched.firstName && errors.password} 
                            />
                        
                            <View style={styles.signin_continue_email}>
                                <Text style={styles.signin_continue_email_text} onPress={handleSubmit} returnKeyType="go" >Continue</Text>
                            </View>
                        </>
                     }}
                    </Formik>
                </View>
                <View style={styles.bottom_section}>
                    <View style={styles.signin_other}>
                        <Text style={styles.signin_other_new} onPress={() =>navigation.navigate('Signup')}>New user?<Text style={styles.signin_other_createanaccount} onPress={() =>navigation.navigate('Signup')}> Create an account</Text></Text>
                        <Text style={styles.signin_other_forget} onPress={() =>navigation.navigate('Signup')}>Forget password?<Text style={styles.signin_other_password} onPress={() =>navigation.navigate('Signup')}> Create new</Text></Text>
                    </View>
                    <View style={styles.signin_bottom}>
                        <Text style={styles.signin_bottom_text}>See our <Text style={styles.signin_bottom_privacy} onPress={() =>navigation.navigate('TabNavigation')}>Privacy Policy</Text> for more details or to opt-out at any time.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        </>
    );
};

const styles  = StyleSheet.create({
    login_page: {
        flex: 1,
    },
    backButton:{
        position: 'absolute',
        marginTop: 55,
        marginLeft: 25
    },
    signin_container : {
        marginTop: 100,
        marginLeft: 25
    },
    signin_login : {
        fontSize:50,
        color: '#323232',
        marginTop:3
    },
    withemail_login : {
        fontSize:16,
        color: '#323232'
    },
    signin_email: {
        marginTop: 30
    },
    email_input: {
        borderWidth: 1,
        width: 325,
        height: 45,
        marginLeft: 25,
        borderRadius: 5,
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
    password_input: {
        borderWidth: 1,
        width: 325,
        height: 45,
        marginLeft: 25,
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
        marginLeft: 250,
        marginTop: 25
    },
    signin_continue_email_text:{
        color: '#fff',
        fontSize: 18,
        fontWeight: '500'
    },
    bottom_section: {
        flex: 1,
        marginTop: 290
    },
    signin_other:{
        flex: 1,
        alignItems:'flex-end',
        marginRight: 30
    },
    signin_other_text :{
        marginBottom: 7
    },
    signin_other_new:{
        fontSize:13
    },
    signin_other_createanaccount:{
        color: '#FF3939',
        fontSize: 13
    },
    signin_bottom : {
        borderTopColor: '#666666',
        borderTopWidth: 0.7,
        width: 325,
        marginLeft: 25,
        marginBottom: 40
    },
    signin_bottom_text:{
        marginTop:10,
        color: '#666666',
        fontSize: 12
    },
    signin_bottom_privacy:{
        color: '#FF3939',
        fontSize: 12
    },
    signin_other_forget: {
        marginTop:7,
        fontSize: 12,
        marginBottom:14

    },
    signin_other_password: {
        color: '#FF3939',
    }

});
export default Login;