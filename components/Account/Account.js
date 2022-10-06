import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccountImage from '../../Stuff/Images/Account_Portal/userAccount.png'
import { useNavigation } from '@react-navigation/native';
import {publicRequest} from '../../Axios_call';



const Account = () => {

  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  const signOut = async () => {
    try {
      const user_id = await AsyncStorage.getItem('id');
      console.log(user_id)
        await AsyncStorage.removeItem('id').then( async () => { 
            await AsyncStorage.removeItem('accessToken').then(()=>{
              navigation.navigate('Continueas');   
              console.log('okay token is deleted')
            }) 
        })
    }
    catch (exception) {
        return false;
    }

}

  return (
    <ScrollView style={styles.ScrollView_account}>
       <View style={{marginTop:40}}>
        <Feather style={styles.edit_icon} name="edit" size={30} color="#FF3939" />
        <Text onPress={signOut} style={styles.logout}>Log out</Text>
        <Image source={AccountImage} style={[styles.account_image, { width, resizeMode: 'contain' }]}/>
      </View>
    </ScrollView>
  )
}

export default Account;

const styles = StyleSheet.create({
  ScrollView_account:{
    backgroundColor: '#fff',
    flex:1
  },
  edit_icon:{
    textAlign: 'right',
    marginTop:10,
    marginRight:20
  },
  account_image:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  logout:{
    padding:20,
    backgroundColor:'#FF3939',
    color: '#FFFF',
  }
})