import { View, Text, StyleSheet, Image, useWindowDimensions , TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';



const Onboarding_item = ({ item }) => {

    const { width } = useWindowDimensions();
    const navigation = useNavigation(); 

  return (
    <>
        <View style={[styles.container, {width}]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
            <View styles={{flex: 0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            {item.id == 3 && (
                    <TouchableOpacity style={{borderRadius: 10, padding: 10 , backgroundColor: '#000', marginTop:40}} 
                    onPress={() =>navigation.navigate('Continueas')}>
                        <Text style={{color: '#fff'}}>Get Started</Text>
                    </TouchableOpacity>
            )}
        </View>
    </>
  );
};

const styles  = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image : {
        alignItems: 'center',
        marginTop: 70,
        justifyContent: 'center',
    },
    title : {
        fontWeight: '400',
        fontSize: 24,
        marginTop: 50,
        marginBottom: 30,
        marginRight: 80,
        marginLeft: 80,
        color: '#000000',
        textAlign: 'center'
    },
    description : {
        fontWeight: '300',
        fontSize: 13,
        color: '#000000',
        textAlign: 'center',
        paddingHorizontal: 64
    }
});

export default Onboarding_item;
